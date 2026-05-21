# CSS imports — @neo-skeuo/web-css

Import neo-skeuo CSS **before** your app’s custom styles so tokens and component classes win predictable cascades.

## Entrypoints

| Import path | Contents |
|-------------|----------|
| `@neo-skeuo/web-css/index.css` | tokens + motion + components (default for primitives) |
| `@neo-skeuo/web-css/tokens.css` | CSS variables only (light) |
| `@neo-skeuo/web-css/tokens-dark.css` | CSS variables only (dark) |
| `@neo-skeuo/web-css/components.css` | primitive classes only |
| `@neo-skeuo/web-css/motion.css` | animations + `prefers-reduced-motion` |
| `@neo-skeuo/web-css/antd/index.css` | Ant Design 5 overrides |
| `@neo-skeuo/web-css/refine/index.css` | admin layout chrome |

## Stacks (order matters)

### React / Vue / Svelte primitives only

```ts
import "@neo-skeuo/web-css/index.css";
```

Root element: `class="neo-skeuo"` and `data-neo-theme="light"` | `"dark"` (set by `NeoProvider`).

### Ant Design 5

```ts
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";
```

Use `NeoSkeuoAntdProvider` or `NeoRefineRoot` — both set `neo-skeuo` on the root.

### Refine admin shell

```ts
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";
import "@neo-skeuo/web-css/refine/index.css";
```

### Tokens without full components bundle

If you inject variables yourself (e.g. SSR), you may import only `tokens.css` / `tokens-dark.css` and apply `toCssVariables()` from `@neo-skeuo/tokens` — see [recipes/tokens-only.md](./recipes/tokens-only.md).

## Semantic CSS variables

`--neo-success`, `--neo-warning`, `--neo-error`, `--neo-info` — used by alerts and Ant tier-2 stubs.

## Sketch filter dependency

Raised surfaces use `filter: url(#neo-sketch)`. React apps must render `<NeoSketchDefs />` once. Ant/refine providers include it via `@neo-skeuo/antd`.
