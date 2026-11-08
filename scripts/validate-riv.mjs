// Checks that every .riv file in a folder starts with the "RIVE" magic header.
// Rive has no official CLI validator yet; replace this with one if it ships.
import { readdir, open } from "node:fs/promises";
import { join } from "node:path";

const dir = process.argv[2] ?? "rives/compiled";
const files = (await readdir(dir)).filter((f) => f.endsWith(".riv"));

if (files.length === 0) {
  console.log(`No .riv files in ${dir}`);
  process.exit(0);
}

let failed = 0;
for (const file of files) {
  const handle = await open(join(dir, file), "r");
  const { buffer, bytesRead } = await handle.read(Buffer.alloc(4), 0, 4, 0);
  await handle.close();
  const ok = bytesRead === 4 && buffer.toString("ascii") === "RIVE";
  console.log(`${ok ? "ok  " : "FAIL"} ${file}`);
  if (!ok) failed++;
}

process.exit(failed ? 1 : 0);
