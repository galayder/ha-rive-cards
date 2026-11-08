import { RuntimeLoader } from "@rive-app/webgl2";
import { version as riveVersion } from "@rive-app/webgl2/package.json";

// The build copies rive.wasm and rive_fallback.wasm next to ha-rive-cards.js
// (see vite.config.ts). Resolve them against this module's own URL so it works
// wherever HA serves the bundle from: /hacsfiles/ha-rive-cards/ or /local/...
// The version query busts browser caches when the runtime is upgraded.
// `moduleUrl` is a variable on purpose: Vite would otherwise try to inline
// `new URL("literal", import.meta.url)` as a base64 asset.
const moduleUrl = import.meta.url;
const wasmUrl = (file: string) => new URL(`${file}?v=${riveVersion}`, moduleUrl).href;

RuntimeLoader.setWasmUrl(wasmUrl("rive.wasm"));
RuntimeLoader.setWasmFallbackUrl(wasmUrl("rive_fallback.wasm"));
