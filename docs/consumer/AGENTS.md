# Consumer app — agent rules for @neo-skeuo

Copy these rules into your application repo (e.g. `.cursor/rules/neo-skeuo.mdc` or your `AGENTS.md`) when using published npm packages.

## Install routing

| App type | Packages |
|----------|----------|
| Admin + Refine | `@neo-skeuo/refine`, `@neo-skeuo/web-css` |
| Ant Design 5 | `@neo-skeuo/antd`, `@neo-skeuo/web-css` |
| Custom React UI | `@neo-skeuo/react`, `@neo-skeuo/web-css` |
| Tokens / CSS only | `@neo-skeuo/tokens`, `@neo-skeuo/web-css` |

Do not add `@neo-skeuo/vue`, `@neo-skeuo/svelte`, or `@neo-skeuo/react-native` unless the user names that framework (Alpha maturity).

## CSS

- Import `@neo-skeuo/web-css` **before** application overrides.
- Ant apps: `index.css` then `antd/index.css`.
- Refine admin: also `refine.css`.
- Details: [css.imports.md](../css.imports.md) in the neo-skeuo repo (or your vendored copy).

## React primitives

- Wrap UI in `NeoProvider`.
- Render `<NeoSketchDefs />` **once** at the app root (sketch SVG filter).
- Do not hand-roll Ant `theme.token` — use `NeoSkeuoAntdProvider` or `toAntdTheme()` from `@neo-skeuo/tokens`.

## Admin UIs

- Prefer `@neo-skeuo/refine` + Ant components for CRUD, not `@neo-skeuo/react` `NeoTable`.
- Use Ant `Table`, `Form`, `DatePicker` for production admin features.

## Versioned docs

When packages are public on npm, index documentation on [Context7](https://context7.com) (or your docs site) so agents resolve APIs for the **installed version**, not stale training data.

Query example (Cursor MCP): resolve library `@neo-skeuo/react` before generating imports.

## Recipes

Copy-paste stacks in the neo-skeuo repo under `docs/recipes/`:

- `react-primitives.md`
- `react-antd.md`
- `react-refine-admin.md`
