# @neo-skeuo/refine

Neo-skeuo admin shell for **Ant Design 5**, with an optional **Refine** (`@refinedev/core`) wrapper.

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
