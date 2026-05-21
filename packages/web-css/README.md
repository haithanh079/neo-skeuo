# @neo-skeuo/web-css

[![npm version](https://img.shields.io/npm/v/@neo-skeuo/web-css.svg)](https://www.npmjs.com/package/@neo-skeuo/web-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

CSS tokens, primitives utilities, Ant Design overrides, Refine chrome.

```bash
npm install @neo-skeuo/web-css @neo-skeuo/tokens
```

```css
@import "@neo-skeuo/web-css/index.css";
@import "@neo-skeuo/web-css/antd/index.css";
```

Use `class="neo-skeuo"` and `data-neo-theme="light|dark"` on your app root.

## Entrypoints

| Import | Contents |
|--------|----------|
| `index.css` | tokens + motion + components |
| `tokens.css` / `tokens-dark.css` | CSS variables only |
| `components.css` | primitive classes (btn, input, alert, tabs, table, …) |
| `motion.css` | animations + `prefers-reduced-motion` |
| `antd/index.css` | Ant Design 5 overrides |
| `refine/index.css` | admin layout chrome |

Semantic tokens: `--neo-success`, `--neo-warning`, `--neo-error`, `--neo-info`.

See [docs/css.imports.md](../../docs/css.imports.md) for import order.

---

Part of [neo-skeuo](https://github.com/haithanh079/neo-skeuo). See [AGENTS.md](../../AGENTS.md) for stack routing.
