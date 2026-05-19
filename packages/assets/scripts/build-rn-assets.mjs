import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist", "rn");

await mkdir(out, { recursive: true });

/** RN consumes require() paths; document PNG generation in README for production. */
await writeFile(
  join(out, "manifest.json"),
  JSON.stringify(
    {
      note: "Use SVG via react-native-svg or bundle PNG tiles from src/*.svg",
      assets: ["border-raised", "border-inset", "border-pressed", "paper-texture", "paper-texture-dark"],
    },
    null,
    2,
  ),
);

console.log("RN asset manifest written to dist/rn/manifest.json");
