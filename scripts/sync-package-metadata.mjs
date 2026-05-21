#!/usr/bin/env node
/**
 * Sync shared npm/Git metadata into publishable package.json files.
 * Run: npm run metadata:sync
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const shared = JSON.parse(
  readFileSync(join(root, "package-metadata.shared.json"), "utf8")
);

const GITHUB_BASE =
  "https://github.com/haithanh079/neo-skeuo/tree/master/packages";

/** @type {Record<string, { sideEffects?: string[] }>} */
const extras = {
  "web-css": { sideEffects: ["**/*.css"] },
};

const compiledPackages = new Set([
  "tokens",
  "assets",
  "react",
  "antd",
  "refine",
  "vue",
  "ant-design-vue",
  "react-native",
]);

for (const [folder, extraKeywords] of Object.entries(shared.packages)) {
  const pkgPath = join(root, "packages", folder, "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

  pkg.author = shared.author;
  pkg.license = shared.license;
  pkg.repository = {
    ...shared.repository,
    directory: `packages/${folder}`,
  };
  pkg.bugs = { ...shared.bugs };
  pkg.homepage = `${GITHUB_BASE}/${folder}#readme`;
  pkg.publishConfig = { ...shared.publishConfig };
  pkg.engines = { ...shared.engines };
  pkg.keywords = [...new Set([...shared.baseKeywords, ...extraKeywords])].sort();

  if (extras[folder]) {
    Object.assign(pkg, extras[folder]);
  }

  const files = new Set(pkg.files ?? []);
  files.add("README.md");
  files.add("CHANGELOG.md");
  if (compiledPackages.has(folder)) {
    // preserve dist/src entries already present
  }
  pkg.files = [...files].sort();

  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
  console.log(`updated packages/${folder}/package.json`);
}

console.log("metadata sync complete");
