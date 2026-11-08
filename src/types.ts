// Minimal Home Assistant frontend types used by the cards.

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
  ): Promise<unknown>;
  language: string;
  themes: { darkMode: boolean } & Record<string, unknown>;
}

export interface LovelaceCardConfig {
  type: string;
  [key: string]: unknown;
}

export type RiveFitName =
  | "cover"
  | "contain"
  | "fill"
  | "fitWidth"
  | "fitHeight"
  | "none"
  | "scaleDown";

export interface BaseRiveCardConfig extends LovelaceCardConfig {
  /** URL of the .riv file, e.g. /local/rives/light.riv */
  src: string;
  artboard?: string;
  state_machine?: string;
  fit?: RiveFitName;
  /** Canvas height in CSS units, e.g. "200px". */
  height?: string;
}

export interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
  documentationURL?: string;
}

declare global {
  interface Window {
    customCards?: CustomCardEntry[];
  }
}
