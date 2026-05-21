#!/usr/bin/env node
/** One-time / regen helper: writes docs/components.catalog.json with full metadata. */
import { writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reactSrc = join(root, "packages/react/src");
const FILES = ["context.tsx", "NeoSketchDefs.tsx", "primitives.tsx", "form.tsx", "layout.tsx", "toast.tsx"];

function scanExports() {
  const names = new Set();
  for (const file of FILES) {
    const text = readFileSync(join(reactSrc, file), "utf8");
    for (const m of text.matchAll(/export (?:const|function) (Neo\w+|useNeo\w+)/g)) names.add(m[1]);
  }
  return [...names].sort();
}

const PROVIDERS = new Set(["NeoProvider", "NeoSketchDefs", "NeoToastProvider", "useNeoTheme", "useNeoToast"]);

const meta = {
  NeoButton: {
    variants: { variant: ["primary", "default", "ghost", "danger"] },
    props: { loading: "boolean" },
    story: "Neo/Primitives/Actions/ButtonVariants",
  },
  NeoSurface: { variants: { elevation: ["flat", "raised", "inset", "pressed"] }, story: "Neo/Primitives/Layout" },
  NeoInput: { story: "Neo/Primitives/Form/Inputs" },
  NeoTextarea: { story: "Neo/Primitives/Form/Inputs" },
  NeoInputNumber: { story: "Neo/Primitives/Form/Inputs", note: "alias of NeoInput" },
  NeoSelect: { story: "Neo/Primitives/Form/Inputs" },
  NeoCheckbox: { story: "Neo/Primitives/Form/Toggles" },
  NeoRadio: { story: "Neo/Primitives/Form/Toggles" },
  NeoSwitch: { story: "Neo/Primitives/Form/Toggles" },
  NeoSlider: { story: "Neo/Primitives/Form/Toggles" },
  NeoCard: { story: "Neo/Primitives/Form/FormCard" },
  NeoBadge: { story: "Neo/Primitives/Display" },
  NeoTag: { story: "Neo/Primitives/Display", note: "alias of NeoBadge" },
  NeoModal: {
    props: { open: "boolean", title: "ReactNode", onClose: "() => void" },
    story: "Neo/Primitives/Feedback/Modal",
  },
  NeoAlert: {
    variants: { variant: ["info", "success", "warning", "error"] },
    story: "Neo/Primitives/Feedback/Alert",
  },
  NeoToast: { story: "Neo/Primitives/Feedback/Toast" },
  NeoProgress: { story: "Neo/Primitives/Feedback/Progress" },
  NeoSpinner: { story: "Neo/Primitives/Feedback/Spinner" },
  NeoSkeleton: { story: "Neo/Primitives/Feedback/Skeleton" },
  NeoEmpty: { story: "Neo/Primitives/Feedback/Empty" },
  NeoTabs: {
    props: { active: "string", onChange: "(key) => void", tabs: "string[]", items: "NeoTabItem[]" },
    story: "Neo/Primitives/Navigation/Tabs",
  },
  NeoBreadcrumb: { story: "Neo/Primitives/Navigation/Breadcrumb" },
  NeoPagination: { story: "Neo/Primitives/Navigation/Pagination" },
  NeoSteps: { story: "Neo/Primitives/Navigation/Steps" },
  NeoTooltip: { props: { label: "string" }, story: "Neo/Primitives/Navigation/Tooltip" },
  NeoTable: {
    doNotUseFor: ["Admin tables with sort/filter/pagination — use Ant Design Table via @neo-skeuo/antd"],
    story: "Neo/Primitives/Data",
  },
  NeoList: { story: "Neo/Primitives/Data" },
  NeoAvatar: { story: "Neo/Primitives/Display" },
  NeoDivider: { story: "Neo/Primitives/Layout" },
  NeoFlex: { story: "Neo/Primitives/Layout" },
  NeoColorPicker: { story: null },
  NeoPopover: {
    props: { content: "ReactNode", open: "boolean", defaultOpen: "boolean", onOpenChange: "(open: boolean) => void" },
    story: "Neo/Primitives/Navigation/Popover",
  },
  NeoPopconfirm: { story: null },
  NeoTree: { story: null },
  NeoField: {
    props: { label: "string", hint: "string", error: "string", required: "boolean", htmlFor: "string" },
    story: "Neo/Primitives/Form",
  },
  NeoStack: { story: "Neo/Primitives/Layout" },
  NeoGrid: { story: "Neo/Primitives/Layout" },
  NeoContainer: { story: "Neo/Primitives/Layout" },
  NeoProvider: {
    package: "@neo-skeuo/react",
    props: { theme: ["light", "dark", "system"], className: "string" },
    requires: ["@neo-skeuo/web-css/index.css"],
    story: null,
  },
  NeoSketchDefs: {
    package: "@neo-skeuo/react",
    requires: ["NeoProvider"],
    story: null,
    note: "Render once per app; required for sketch SVG filter",
  },
  NeoToastProvider: { package: "@neo-skeuo/react", requires: ["NeoProvider", "NeoSketchDefs"], story: null },
  useNeoTheme: { package: "@neo-skeuo/react", requires: ["NeoProvider"], story: null, kind: "hook" },
  useNeoToast: { package: "@neo-skeuo/react", requires: ["NeoToastProvider"], story: null, kind: "hook" },
};

const exports = scanExports();
const providers = [];
const components = [];

for (const name of exports) {
  const m = meta[name] ?? {};
  const entry = {
    name,
    package: m.package ?? "@neo-skeuo/react",
    exportPath: m.exportPath ?? "@neo-skeuo/react",
    maturity: m.maturity ?? "beta",
    kind: m.kind ?? (PROVIDERS.has(name) ? "provider" : "component"),
    requires: m.requires ?? ["NeoProvider", "NeoSketchDefs", "@neo-skeuo/web-css/index.css"],
    variants: m.variants ?? {},
    props: m.props ?? {},
    story: m.story ?? null,
    doNotUseFor: m.doNotUseFor ?? [],
    ...(m.note ? { note: m.note } : {}),
  };
  if (PROVIDERS.has(name) || entry.kind === "provider" || entry.kind === "hook") providers.push(entry);
  else components.push(entry);
}

const catalog = {
  meta: {
    version: 1,
    description: "Machine-readable @neo-skeuo component catalog for AI agents",
    syncedAt: new Date().toISOString().slice(0, 10),
    generatedExports: exports,
  },
  providers: [
    ...providers,
    {
      name: "NeoSkeuoAntdProvider",
      package: "@neo-skeuo/antd",
      exportPath: "@neo-skeuo/antd",
      maturity: "production",
      kind: "provider",
      requires: ["@neo-skeuo/web-css/index.css", "@neo-skeuo/web-css/antd/index.css"],
      includes: ["NeoProvider", "NeoSketchDefs", "antd ConfigProvider"],
      story: "Neo/Ant Design",
    },
    {
      name: "NeoRefineRoot",
      package: "@neo-skeuo/refine",
      exportPath: "@neo-skeuo/refine",
      maturity: "beta",
      kind: "provider",
      requires: [
        "@neo-skeuo/web-css/index.css",
        "@neo-skeuo/web-css/antd/index.css",
        "@neo-skeuo/web-css/refine/index.css",
      ],
      story: "Neo/Ant Design/Refine",
    },
    {
      name: "NeoRefineApp",
      package: "@neo-skeuo/refine",
      exportPath: "@neo-skeuo/refine",
      maturity: "beta",
      kind: "provider",
      requires: ["NeoRefineRoot", "@refinedev/core"],
      story: "Neo/Ant Design/Refine",
    },
  ],
  components: components.sort((a, b) => a.name.localeCompare(b.name)),
  tokenUtilities: [
    { name: "getTokens", package: "@neo-skeuo/tokens", story: null },
    { name: "toAntdTheme", package: "@neo-skeuo/tokens", story: null },
    { name: "toAntDesignVueTheme", package: "@neo-skeuo/tokens", story: null },
    { name: "toCssVariables", package: "@neo-skeuo/tokens", story: null },
    { name: "resolveThemeMode", package: "@neo-skeuo/tokens", story: null },
    { name: "getSurfaceStyle", package: "@neo-skeuo/tokens", story: null },
  ],
};

writeFileSync(join(root, "docs/components.catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`);
console.log("Wrote docs/components.catalog.json", components.length, "components");
