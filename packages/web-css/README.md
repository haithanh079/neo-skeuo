# @neo-skeuo/web-css

CSS tokens, primitives utilities, Ant Design overrides, Refine chrome.

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
