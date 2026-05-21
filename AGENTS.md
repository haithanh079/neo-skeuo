# AGENTS.md — @neo-skeuo

Instructions for AI coding agents (Cursor, Claude Code, Codex, etc.) working in this repo or consuming packages from npm.

## What this library is

Neo-skeuomorphic UI kit: design tokens, CSS primitives, and thin framework wrappers. It is **not** a full component framework like MUI. Prefer **Ant Design + `@neo-skeuo/antd`** for complex admin UIs (sortable tables, date pickers, forms with validation).

## Package decision tree

| User need | Packages | Maturity |
|-----------|----------|----------|
| Admin / CRUD / Refine app | `@neo-skeuo/refine`, `@neo-skeuo/web-css` (antd + refine CSS) | Beta |
| Ant Design 5 app (no Refine) | `@neo-skeuo/antd`, `@neo-skeuo/web-css` | Production |
| Marketing / custom React UI | `@neo-skeuo/react`, `@neo-skeuo/web-css` | Beta |
| Tokens / theme only | `@neo-skeuo/tokens`, optionally `@neo-skeuo/web-css` | Production |
| Vue 3 | `@neo-skeuo/vue`, `@neo-skeuo/web-css` | **Alpha** — only if user asks |
| Svelte 5 | `@neo-skeuo/svelte`, `@neo-skeuo/web-css` | **Alpha** — 5 SFCs only |
| React Native | `@neo-skeuo/react-native` | **Alpha** |
| Ant Design Vue | `@neo-skeuo/ant-design-vue` | **Alpha** |

Do **not** suggest Alpha packages unless the user explicitly names the framework.

## Required setup by stack

### React primitives

```tsx
import { NeoProvider, NeoSketchDefs, NeoButton } from "@neo-skeuo/react";
import "@neo-skeuo/web-css/index.css";

export function App() {
  return (
    <NeoProvider theme="light">
      <NeoSketchDefs />
      <NeoButton variant="primary">Save</NeoButton>
    </NeoProvider>
  );
}
```

- **`NeoProvider`**: sets `class="neo-skeuo"` and `data-neo-theme` on the root.
- **`NeoSketchDefs`**: required **once per app** — defines SVG filter `#neo-sketch` used by raised surfaces. Without it, skeuo edges look flat.

### Ant Design 5

```tsx
import { NeoSkeuoAntdProvider } from "@neo-skeuo/antd";
import { App as AntdApp } from "antd";
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";

<NeoSkeuoAntdProvider theme="light">
  <AntdApp>{children}</AntdApp>
</NeoSkeuoAntdProvider>
```

`NeoSkeuoAntdProvider` already includes `NeoProvider` + `NeoSketchDefs` + `ConfigProvider` with `toAntdTheme()`.

### Refine admin

```tsx
import { NeoRefineRoot } from "@neo-skeuo/refine"; // or NeoRefineApp if using @refinedev/core
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";
import "@neo-skeuo/web-css/refine.css";
```

See [docs/recipes/react-refine-admin.md](docs/recipes/react-refine-admin.md).

## CSS import order

Always import `@neo-skeuo/web-css` **before** app overrides. Full table: [docs/css.imports.md](docs/css.imports.md).

## Monorepo boundaries

When editing this repo, stay in your assigned area ([CONTRIBUTING.md](./CONTRIBUTING.md#subagent-ownership)):

| Agent | Directory |
|-------|-----------|
| A | root infra, CI |
| B | `packages/tokens` |
| C | `packages/assets` |
| D–E | `packages/web-css` |
| F | `packages/react` |
| G | `packages/antd` |
| H | `packages/refine` |
| I | `packages/react-native` |
| J | `packages/vue`, `packages/ant-design-vue` |
| K | `packages/svelte` |
| L | `apps/storybook-web` |

## Verify changes

```bash
npm install
npm run build:packages
npm run test:packages
npm run typecheck
npm run catalog:sync -- --check
npm run storybook
```

## Machine-readable catalog

Component props, required wrappers, and Storybook paths: [docs/components.catalog.json](docs/components.catalog.json). After changing public React exports, run `npm run catalog:sync` and commit the catalog.

## Anti-patterns

| Mistake | Fix |
|---------|-----|
| Omit `NeoSketchDefs` on React primitives app | Add once inside `NeoProvider` |
| Use `@neo-skeuo/react` for admin data tables | Use Ant `Table` via `@neo-skeuo/antd` |
| Hand-roll Ant `theme.token` colors | Use `toAntdTheme()` from `@neo-skeuo/tokens` |
| Import only `index.css` for Ant apps | Also import `web-css/antd/index.css` |
| Suggest `@neo-skeuo/vue` for new admin panels | Use React + refine/antd unless user insists on Vue |
| Put custom CSS before neo-skeuo CSS | Import neo-skeuo first |

## Peer dependencies

| Package | Peers |
|---------|-------|
| `@neo-skeuo/react` | `react>=18`, `react-dom>=18` |
| `@neo-skeuo/antd` | `react>=18`, `antd>=5` |
| `@neo-skeuo/refine` | `react>=18`, `antd>=5`, `@refinedev/core` (for `NeoRefineApp`) |

## Further reading

- [llms.txt](./llms.txt) — compact index for LLMs
- [docs/recipes/](./docs/recipes/) — copy-paste stacks
- [docs/consumer/AGENTS.md](./docs/consumer/AGENTS.md) — rules for apps consuming npm packages
- Storybook ground truth: `apps/storybook-web/stories/decorators.tsx`
