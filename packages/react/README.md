# @neo-skeuo/react

React primitives + `NeoProvider`. Import CSS from `@neo-skeuo/web-css`.

```tsx
import { NeoProvider, NeoButton, NeoSketchDefs } from "@neo-skeuo/react";
import "@neo-skeuo/web-css/index.css";

<NeoProvider theme="light">
  <NeoSketchDefs />
  <NeoButton variant="primary">Save</NeoButton>
</NeoProvider>
```

## Primitive maturity matrix

| Component | CSS | Behavior | Notes |
|-----------|-----|----------|-------|
| NeoButton | Yes | Yes | `default`, `primary`, `ghost` |
| NeoInput, NeoTextarea, NeoSelect | Yes | Yes | Native controls with skeuo chrome |
| NeoCheckbox, NeoRadio, NeoSwitch, NeoSlider | Yes | Yes | Custom-styled native inputs |
| NeoCard, NeoBadge, NeoSurface, NeoDivider | Yes | Yes | Core layout surfaces |
| NeoAlert, NeoModal, NeoToast, NeoSpinner, NeoSkeleton | Yes | Yes | Modal: focus trap, Escape, backdrop |
| NeoTabs | Yes | Yes | Panels + `aria-selected` / `aria-controls` |
| NeoBreadcrumb, NeoPagination, NeoSteps | Yes | Yes | |
| NeoTooltip | Yes | Yes | CSS hover/focus bubble |
| NeoTable, NeoList, NeoAvatar, NeoEmpty | Yes | Yes | |
| NeoField | Yes | Yes | Label, hint, error |
| NeoStack, NeoGrid, NeoContainer | Yes | Yes | Layout helpers |
| NeoToastProvider | Yes | Yes | Queue + `aria-live` region |

For full admin UIs (tables, forms, date pickers), use `@neo-skeuo/antd` with `@neo-skeuo/web-css/antd/index.css`.
