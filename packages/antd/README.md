# @neo-skeuo/antd

[![npm version](https://img.shields.io/npm/v/@neo-skeuo/antd.svg)](https://www.npmjs.com/package/@neo-skeuo/antd)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

Ant Design 5 provider with neo-skeuo theme.

```bash
npm install @neo-skeuo/antd @neo-skeuo/web-css antd react react-dom
```

```tsx
import { NeoSkeuoAntdProvider } from "@neo-skeuo/antd";
import { App as AntdApp } from "antd";
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";

<NeoSkeuoAntdProvider theme="light">
  <AntdApp>{children}</AntdApp>
</NeoSkeuoAntdProvider>
```

---

Part of [neo-skeuo](https://github.com/haithanh079/neo-skeuo). See [AGENTS.md](../../AGENTS.md) and [docs/recipes/](../../docs/recipes/) for stack routing.
