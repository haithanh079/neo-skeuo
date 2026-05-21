# @neo-skeuo/react-native

[![npm version](https://img.shields.io/npm/v/@neo-skeuo/react-native.svg)](https://www.npmjs.com/package/@neo-skeuo/react-native)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

React Native primitives using `@neo-skeuo/tokens` `getSurfaceStyle` for native elevations. **Alpha** maturity.

```bash
npm install @neo-skeuo/react-native @neo-skeuo/tokens react react-native react-native-svg
```

```tsx
import { NeoProvider, NeoButton, NeoSurface } from "@neo-skeuo/react-native";

<NeoProvider theme="light">
  <NeoSurface elevation="raised">
    <NeoButton variant="primary">Save</NeoButton>
  </NeoSurface>
</NeoProvider>
```

Navigation and table components have basic implementations; sketch SVG filters are web-only.

---

Part of [neo-skeuo](https://github.com/haithanh079/neo-skeuo). See [AGENTS.md](../../AGENTS.md) for stack routing.
