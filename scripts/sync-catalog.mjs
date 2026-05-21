#!/usr/bin/env node
/**
 * Validates docs/components.catalog.json against @neo-skeuo/react public exports.
 * Usage: node scripts/sync-catalog.mjs [--check] [--write]
 * Default: --check (exit 1 if catalog export list is stale)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = join(root, "docs/components.catalog.json");
const reactSrc = join(root, "packages/react/src");

const REACT_SRC_FILES = [
  "context.tsx",
  "NeoSketchDefs.tsx",
  "primitives.tsx",
  "form.tsx",
  "layout.tsx",
  "toast.tsx",
];

const PROVIDERS = new Set(["NeoProvider", "NeoSketchDefs", "NeoToastProvider", "useNeoTheme", "useNeoToast"]);

function scanReactExports() {
  const names = new Set();
  for (const file of REACT_SRC_FILES) {
    const text = readFileSync(join(reactSrc, file), "utf8");
    for (const m of text.matchAll(/export (?:const|function) (Neo\w+|useNeo\w+)/g)) {
      names.add(m[1]);
    }
  }
  return [...names].sort();
}

function loadCatalog() {
  return JSON.parse(readFileSync(catalogPath, "utf8"));
}

function getCatalogReactNames(catalog) {
  const fromComponents = catalog.components
    .filter((c) => c.package === "@neo-skeuo/react")
    .map((c) => c.name);
  const fromProviders = (catalog.providers ?? [])
    .filter((c) => c.package === "@neo-skeuo/react")
    .map((c) => c.name);
  return [...fromComponents, ...fromProviders].sort();
}

const check = process.argv.includes("--check") || !process.argv.includes("--write");
const write = process.argv.includes("--write");

const codeExports = scanReactExports();
const catalog = loadCatalog();
const catalogNames = getCatalogReactNames(catalog);

const missingInCatalog = codeExports.filter((n) => !catalogNames.includes(n));
const extraInCatalog = catalogNames.filter((n) => !codeExports.includes(n));

if (missingInCatalog.length || extraInCatalog.length) {
  const lines = [];
  if (missingInCatalog.length) lines.push(`Missing in catalog: ${missingInCatalog.join(", ")}`);
  if (extraInCatalog.length) lines.push(`Stale in catalog: ${extraInCatalog.join(", ")}`);
  console.error(lines.join("\n"));
  if (write) {
    const existing = new Map(catalog.components.map((c) => [c.name, c]));
    for (const name of missingInCatalog) {
      existing.set(name, {
        name,
        package: "@neo-skeuo/react",
        exportPath: "@neo-skeuo/react",
        maturity: "beta",
        requires: ["NeoProvider", "NeoSketchDefs", "@neo-skeuo/web-css/index.css"],
        props: {},
        story: null,
        doNotUseFor: [],
        _generated: true,
      });
    }
    for (const name of extraInCatalog) {
      existing.delete(name);
    }
    catalog.meta.generatedExports = codeExports;
    catalog.meta.syncedAt = new Date().toISOString().slice(0, 10);
    catalog.components = [...existing.values()].sort((a, b) => a.name.localeCompare(b.name));
    writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
    console.log("Updated", catalogPath);
    process.exit(0);
  }
  if (check) process.exit(1);
} else {
  catalog.meta.generatedExports = codeExports;
  if (write) {
    catalog.meta.syncedAt = new Date().toISOString().slice(0, 10);
    writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
  }
  console.log(`Catalog OK (${codeExports.length} react exports)`);
  process.exit(0);
}
