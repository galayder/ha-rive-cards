import { RIVE_ENTITY_CARD_TAG, RiveEntityCard } from "./cards/rive-entity-card";
import type { CustomCardEntry } from "./types";

const VERSION = "1.0.0";

const cards: Array<{ tag: string; element: CustomElementConstructor } & Omit<CustomCardEntry, "type">> = [
  {
    tag: RIVE_ENTITY_CARD_TAG,
    element: RiveEntityCard,
    name: "Rive Entity Card",
    description: "Animate an entity with a Rive state machine.",
    preview: false,
  },
];

window.customCards = window.customCards ?? [];

for (const { tag, element, ...info } of cards) {
  // Guard against double registration when the resource is loaded twice.
  if (!customElements.get(tag)) customElements.define(tag, element);
  if (!window.customCards.some((c) => c.type === tag)) {
    window.customCards.push({ type: tag, ...info });
  }
}

console.info(`%c HA-RIVE-CARDS %c v${VERSION} `, "color:#fff;background:#1d1d1d", "color:#1d1d1d;background:#fff");
