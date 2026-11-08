import { LitElement, css, html, nothing, type PropertyValues, type TemplateResult } from "lit";
import { property, query, state } from "lit/decorators.js";
import "../rive-runtime"; // must run before any Rive instance is created
import {
  Alignment,
  Fit,
  Layout,
  Rive,
  StateMachineInputType,
  type StateMachineInput,
} from "@rive-app/webgl2";
import type { BaseRiveCardConfig, HomeAssistant } from "../types";

/**
 * Shared behaviour for every Rive card:
 * - stores `hass` and the validated config
 * - creates the Rive instance once the canvas exists, and recreates it when
 *   the file, artboard, state machine or fit changes
 * - keeps the drawing surface sized to the canvas with a ResizeObserver
 * - frees the Rive instance (and its WebGL context) when the card is removed
 *
 * Subclasses implement `validateConfig`, `watchedEntities` and `syncToRive`.
 */
export abstract class BaseRiveCard<
  TConfig extends BaseRiveCardConfig = BaseRiveCardConfig,
> extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() protected config?: TConfig;
  @state() protected loadError?: string;

  @query("canvas") protected canvas?: HTMLCanvasElement;

  protected rive?: Rive;
  private riveReady = false;
  private resizeObserver?: ResizeObserver;

  // ---- Home Assistant card API ---------------------------------------------

  setConfig(config: TConfig): void {
    if (!config || typeof config !== "object") {
      throw new Error("Invalid configuration");
    }
    if (!config.src || typeof config.src !== "string") {
      throw new Error("You must set 'src' to the URL of a .riv file");
    }
    this.validateConfig(config);
    this.config = { ...config };
  }

  getCardSize(): number {
    return 3;
  }

  getGridOptions(): Record<string, number> {
    return { columns: 6, rows: 3, min_rows: 2 };
  }

  // ---- Hooks for subclasses -----------------------------------------------

  /** Throw an Error with a readable message if the card-specific config is invalid. */
  protected abstract validateConfig(config: TConfig): void;

  /** Entity ids whose state changes should be pushed into Rive. */
  protected abstract watchedEntities(): string[];

  /** Push the current Home Assistant state into the Rive state machine. */
  protected abstract syncToRive(hass: HomeAssistant, rive: Rive): void;

  /** Optional content drawn on top of the canvas (labels, buttons). */
  protected renderOverlay(): TemplateResult | typeof nothing {
    return nothing;
  }

  /** Called when the canvas is clicked. */
  protected handleTap(): void {}

  // ---- Helpers for subclasses ---------------------------------------------

  protected findInput(name: string): StateMachineInput | undefined {
    const machine = this.config?.state_machine;
    if (!this.rive || !machine) return undefined;
    return this.rive.stateMachineInputs(machine)?.find((i) => i.name === name);
  }

  protected setBooleanInput(name: string, value: boolean): void {
    const input = this.findInput(name);
    if (input?.type === StateMachineInputType.Boolean && input.value !== value) {
      input.value = value;
    }
  }

  protected setNumberInput(name: string, value: number): void {
    const input = this.findInput(name);
    if (input?.type === StateMachineInputType.Number && input.value !== value) {
      input.value = value;
    }
  }

  protected fireTrigger(name: string): void {
    const input = this.findInput(name);
    if (input?.type === StateMachineInputType.Trigger) input.fire();
  }

  // ---- Lifecycle -----------------------------------------------------------

  override connectedCallback(): void {
    super.connectedCallback();
    // HA detaches and reattaches cards when switching views; rebuild if needed.
    if (this.hasUpdated && !this.rive) this.createRive();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.destroyRive();
  }

  protected override shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size === 1 && changed.has("hass")) {
      // Canvas content is drawn by Rive, so only push state, don't re-render.
      this.pushHassIfChanged(changed.get("hass") as HomeAssistant | undefined);
      return false;
    }
    return true;
  }

  protected override updated(changed: PropertyValues): void {
    if (changed.has("config")) {
      const prev = changed.get("config") as TConfig | undefined;
      if (!prev || this.riveConfigChanged(prev, this.config!)) {
        this.createRive();
      } else {
        this.pushHass();
      }
    } else if (changed.has("hass")) {
      this.pushHassIfChanged(changed.get("hass") as HomeAssistant | undefined);
    }
  }

  protected override render(): TemplateResult {
    if (!this.config) return html``;
    const height = this.config.height ?? "200px";
    return html`
      <ha-card>
        <div class="stage" style="height: ${height}">
          <canvas @click=${() => this.handleTap()}></canvas>
          ${this.renderOverlay()}
        </div>
        ${this.loadError
          ? html`<div class="error">${this.loadError}</div>`
          : nothing}
      </ha-card>
    `;
  }

  // ---- Rive management -----------------------------------------------------

  private riveConfigChanged(a: TConfig, b: TConfig): boolean {
    return (
      a.src !== b.src ||
      a.artboard !== b.artboard ||
      a.state_machine !== b.state_machine ||
      a.fit !== b.fit
    );
  }

  private createRive(): void {
    this.destroyRive();
    const canvas = this.canvas;
    const config = this.config;
    if (!canvas || !config || !this.isConnected) return;

    this.loadError = undefined;
    const rive = new Rive({
      canvas,
      src: config.src,
      artboard: config.artboard,
      stateMachine: config.state_machine,
      autoplay: true,
      layout: new Layout({
        fit: (config.fit as Fit | undefined) ?? Fit.Contain,
        alignment: Alignment.Center,
      }),
      onLoad: () => {
        if (this.rive !== rive) return;
        this.riveReady = true;
        rive.resizeDrawingSurfaceToCanvas();
        this.pushHass();
      },
      onLoadError: () => {
        if (this.rive !== rive) return;
        this.loadError = `Could not load ${config.src}`;
      },
    });
    this.rive = rive;

    this.resizeObserver = new ResizeObserver(() => {
      if (this.riveReady) this.rive?.resizeDrawingSurfaceToCanvas();
    });
    this.resizeObserver.observe(canvas);
  }

  private destroyRive(): void {
    this.resizeObserver?.disconnect();
    this.resizeObserver = undefined;
    this.riveReady = false;
    if (this.rive) {
      this.rive.cleanup();
      this.rive = undefined;
    }
  }

  private pushHass(): void {
    if (this.hass && this.rive && this.riveReady) {
      this.syncToRive(this.hass, this.rive);
    }
  }

  private pushHassIfChanged(prev: HomeAssistant | undefined): void {
    if (!this.hass) return;
    const changed =
      !prev ||
      this.watchedEntities().some((id) => prev.states[id] !== this.hass!.states[id]);
    if (changed) this.pushHass();
  }

  static override styles = css`
    :host {
      display: block;
    }
    ha-card {
      overflow: hidden;
      height: 100%;
    }
    .stage {
      position: relative;
      width: 100%;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .error {
      padding: 8px 16px;
      color: var(--error-color, #db4437);
    }
  `;
}
