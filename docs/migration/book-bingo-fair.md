# Migration from inline admin theme (Book Bingo Fair)

1. Add workspace dependencies: `@neo-skeuo/refine`, `@neo-skeuo/web-css`, `@neo-skeuo/react`.
2. Replace `AdminApp` wrapper with `NeoRefineRoot`.
3. Import `@neo-skeuo/web-css/index.css`, `antd/index.css`, `refine/index.css`.
4. Rename `.admin-cms` → `.neo-skeuo` on layout root.
5. Remove `web/src/admin/theme/`.

For general consumer guidance, see [../consumer/AGENTS.md](../consumer/AGENTS.md).
