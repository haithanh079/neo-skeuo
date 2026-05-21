---
"@neo-skeuo/refine": patch
---

Fix NeoAdminLayout horizontal overflow: constrain flex column and `neo-admin-content` with `minWidth: 0`, `maxWidth: 100%`, and `overflowX: auto` so wide Refine/Ant Design tables scroll inside the content panel instead of breaking the layout.
