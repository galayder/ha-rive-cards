import { LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import type { RiveEntityCardConfig } from "../cards/rive-entity-card";
import type { HomeAssistant } from "../types";

// Uses HA's built-in <ha-form>, which is available inside the card editor dialog.
const SCHEMA = [
  { name: "entity", required: true, selector: { entity: {} } },
  { name: "src", required: true, selector: { text: {} } },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "artboard", selector: { text: {} } },
      { name: "state_machine", selector: { text: {} } },
    ],
  },
  {
    type: "grid",
    name: "",
    schema: [
      {
        name: "fit",
        selector: {
          select: {
            mode: "dropdown",
            options: ["contain", "cover", "fill", "fitWidth", "fitHeight", "scaleDown", "none"],
          },
        },
      },
      { name: "height", selector: { text: {} } },
    ],
  },
  {
    name: "tap_action",
    selector: { select: { mode: "dropdown", options: ["toggle", "none"] } },
  },
  { name: "bindings", selector: { object: {} } },
] as const;

const LABELS: Record<string, string> = {
  entity: "Entity",
  src: "Rive file URL (e.g. /local/rives/light.riv)",
  artboard: "Artboard (optional)",
  state_machine: "State machine",
  fit: "Fit",
  height: "Height (e.g. 200px)",
  tap_action: "Tap action",
  bindings: "Input bindings (list of { input, type, attribute? })",
};

export class RiveEntityCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private config?: RiveEntityCardConfig;

  setConfig(config: RiveEntityCardConfig): void {
    this.config = config;
  }

  protected override render() {
    if (!this.hass || !this.config) return nothing;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${SCHEMA}
        .computeLabel=${(s: { name: string }) => LABELS[s.name] ?? s.name}
        @value-changed=${this.onValueChanged}
      ></ha-form>
    `;
  }

  private onValueChanged(ev: CustomEvent<{ value: RiveEntityCardConfig }>): void {
    ev.stopPropagation();
    this.config = ev.detail.value;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this.config },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

if (!customElements.get("rive-entity-card-editor")) {
  customElements.define("rive-entity-card-editor", RiveEntityCardEditor);
}
