# Recipe: Refine admin

## Install

```bash
npm install @neo-skeuo/refine @neo-skeuo/web-css antd
# If using Refine data layer:
npm install @refinedev/core
```

## Ant Design only (no Refine provider)

```tsx
import { NeoRefineRoot } from "@neo-skeuo/refine";
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";
import "@neo-skeuo/web-css/refine.css";

export function App() {
  return (
    <NeoRefineRoot theme="light">
      <YourAdminRoutes />
    </NeoRefineRoot>
  );
}
```

## With Refine `<Refine>`

```tsx
import { NeoRefineApp } from "@neo-skeuo/refine";

<NeoRefineApp
  theme="light"
  refine={{
    /* RefineProps: resources, authProvider, ... */
  }}
>
  <YourAdminRoutes />
</NeoRefineApp>
```

Requires `@refinedev/core` as a peer when using `NeoRefineApp`.

## Layout chrome

Optional `NeoAdminLayout` from `@neo-skeuo/refine` for header/sider slots — pair with Ant `Layout` and `Menu`.

Storybook: `Neo/Ant Design/Refine`.
