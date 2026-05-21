# Recipe: Tokens only

Use when theming a custom stack without neo-skeuo React components.

## Install

```bash
npm install @neo-skeuo/tokens
```

## TypeScript

```ts
import { getTokens, resolveThemeMode, toCssVariables, toAntdTheme } from "@neo-skeuo/tokens";

const resolved = resolveThemeMode("system");
const tokens = getTokens(resolved);
const antTheme = toAntdTheme(resolved);
const cssBlock = toCssVariables(resolved, ".neo-skeuo");
```

## CSS variables in the browser

Import prebuilt CSS instead of generating:

```ts
import "@neo-skeuo/web-css/tokens.css";
import "@neo-skeuo/web-css/tokens-dark.css";
```

Root markup:

```html
<div class="neo-skeuo" data-neo-theme="light">...</div>
```

## Types

`NeoThemeMode`: `"light" | "dark" | "system"`  
`NeoElevation`: `"flat" | "raised" | "inset" | "pressed"`  
`NeoButtonVariant`: `"primary" | "default" | "ghost" | "danger"`
