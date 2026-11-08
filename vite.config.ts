import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";

const require = createRequire(import.meta.url);

/**
 * Copies the Rive engine (.wasm) next to the bundle so Home Assistant serves it
 * locally instead of the runtime fetching it from a CDN. See src/rive-runtime.ts.
 */
function riveWasm(): Plugin {
  const files = ["rive.wasm", "rive_fallback.wasm"];
  return {
    name: "rive-wasm",
    buildStart() {
      for (const file of files) {
        this.addWatchFile(require.resolve(`@rive-app/webgl2/${file}`));
      }
    },
    generateBundle() {
      for (const file of files) {
        this.emitFile({
          type: "asset",
          fileName: file,
          source: readFileSync(require.resolve(`@rive-app/webgl2/${file}`)),
        });
      }
    },
  };
}

export default defineConfig({
  plugins: [riveWasm()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    target: "es2022",
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "ha-rive-cards.js",
    },
    rolldownOptions: {
      // Home Assistant loads one file, so bundle everything (lit, rive) into it.
      external: [],
      output: {
        codeSplitting: false,
      },
    },
  },
});
