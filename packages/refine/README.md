# @neo-skeuo/refine

[![npm version](https://img.shields.io/npm/v/@neo-skeuo/refine.svg)](https://www.npmjs.com/package/@neo-skeuo/refine)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

Neo-skeuo admin shell for **Ant Design 5**, with an optional **Refine** (`@refinedev/core`) wrapper.

```bash
npm install @neo-skeuo/refine @neo-skeuo/web-css antd react react-dom
# Optional Refine wrapper:
npm install @refinedev/core
```

## NeoRefineRoot

Themed Ant Design only — no Refine dependency required at runtime if you only import this:

```tsx
import { NeoRefineRoot } from "@neo-skeuo/refine";
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";

<NeoRefineRoot theme="light">
  <YourApp />
</NeoRefineRoot>
```

## NeoRefineApp

When using [Refine](https://refine.dev/), wrap your app with `NeoRefineApp` and pass `refine` props:

```tsx
import { NeoRefineApp } from "@neo-skeuo/refine";

<NeoRefineApp theme="light" refine={{ /* RefineProps */ }}>
  <YourRoutes />
</NeoRefineApp>
```

Requires `@refinedev/core` as a peer dependency.

## NeoAdminLayout

Optional header / sider slots for admin chrome. Pair with Ant Design `Layout` and `Menu` in your app.

See [docs/recipes/react-refine-admin.md](../../docs/recipes/react-refine-admin.md).

---

Part of [neo-skeuo](https://github.com/haithanh079/neo-skeuo). See [AGENTS.md](../../AGENTS.md) for stack routing.
