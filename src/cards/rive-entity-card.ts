import type { Rive } from "@rive-app/webgl2";
import { BaseRiveCard } from "./base-rive-card";
import type { BaseRiveCardConfig, HassEntity, HomeAssistant } from "../types";

export type RiveBinding =
  /** Boolean input set to true when the entity is "on"-like. */
  | { input: string; type: "boolean" }
  /** Number input set from the entity state or one of its attributes. */
  | { input: string; type: "number"; attribute?: string }
  /** Trigger fired every time the entity state changes. */
  | { input: string; type: "trigger" };

export interface RiveEntityCardConfig extends BaseRiveCardConfig {
  entity: string;
  bindings?: RiveBinding[];
  /** What a click does. Defaults to "toggle". */
  tap_action?: "toggle" | "none";
}

const ON_STATES = new Set(["on", "open", "opening", "home", "playing", "unlocked", "active"]);

export const RIVE_ENTITY_CARD_TAG = "rive-entity-card";

/**
 * Drives a Rive state machine from one entity.
 *
 * type: custom:rive-entity-card
 * entity: light.kitchen
 * src: /local/rives/light.riv
 * state_machine: State Machine 1
 * bindings:
 *   - { input: is_on, type: boolean }
 *   - { input: brightness, type: number, attribute: brightness }
 *   - { input: changed, type: trigger }
 */
export class RiveEntityCard extends BaseRiveCard<RiveEntityCardConfig> {
  private lastState?: string;

  static async getConfigElement(): Promise<HTMLElement> {
    await import("../editors/rive-entity-card-editor");
    return document.createElement("rive-entity-card-editor");
  }

  static getStubConfig(hass: HomeAssistant): Partial<RiveEntityCardConfig> {
    const entity =
      Object.keys(hass.states).find((id) => /^(light|switch|fan)\./.test(id)) ?? "";
    return {
      entity,
      src: "/local/rives/example.riv",
      state_machine: "State Machine 1",
      bindings: [{ input: "is_on", type: "boolean" }],
    };
  }

  protected validateConfig(config: RiveEntityCardConfig): void {
    if (!config.entity) throw new Error("You must set 'entity'");
    for (const b of config.bindings ?? []) {
      if (!b.input) throw new Error("Every binding needs an 'input' name");
      if (!["boolean", "number", "trigger"].includes(b.type)) {
        throw new Error(`Binding '${b.input}': type must be boolean, number or trigger`);
      }
    }
  }

  protected watchedEntities(): string[] {
    return this.config ? [this.config.entity] : [];
  }

  protected syncToRive(hass: HomeAssistant, _rive: Rive): void {
    const entity = hass.states[this.config!.entity];
    if (!entity) return;

    const stateChanged = this.lastState !== undefined && this.lastState !== entity.state;
    this.lastState = entity.state;

    for (const binding of this.config!.bindings ?? []) {
      switch (binding.type) {
        case "boolean":
          this.setBooleanInput(binding.input, ON_STATES.has(entity.state));
          break;
        case "number": {
          const value = readNumber(entity, binding.attribute);
          if (value !== undefined) this.setNumberInput(binding.input, value);
          break;
        }
        case "trigger":
          if (stateChanged) this.fireTrigger(binding.input);
          break;
      }
    }
  }

  protected override handleTap(): void {
    if (!this.hass || !this.config || this.config.tap_action === "none") return;
    this.hass.callService("homeassistant", "toggle", {
      entity_id: this.config.entity,
    });
  }
}

function readNumber(entity: HassEntity, attribute?: string): number | undefined {
  const raw = attribute ? entity.attributes[attribute] : entity.state;
  const value = typeof raw === "number" ? raw : Number.parseFloat(String(raw));
  return Number.isFinite(value) ? value : undefined;
}
