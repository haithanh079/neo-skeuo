# Migration from inline admin theme

1. Add workspace dependencies: `@neo-skeuo/refine`, `@neo-skeuo/web-css`, `@neo-skeuo/react`.
2. Replace `AdminApp` wrapper with `NeoRefineRoot`.
3. Import `@neo-skeuo/web-css/index.css`, `antd/index.css`, `refine.css`.
4. Rename `.admin-cms` → `.neo-skeuo` on layout root.
5. Remove `web/src/admin/theme/`.
