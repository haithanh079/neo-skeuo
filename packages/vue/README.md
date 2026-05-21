# @neo-skeuo/vue

[![npm version](https://img.shields.io/npm/v/@neo-skeuo/vue.svg)](https://www.npmjs.com/package/@neo-skeuo/vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

Vue 3 primitives using `@neo-skeuo/web-css` classes. **Alpha** maturity.

```bash
npm install @neo-skeuo/vue @neo-skeuo/web-css vue
```

```vue
<script setup>
import { NeoProvider, NeoButton } from "@neo-skeuo/vue";
</script>

<template>
  <NeoProvider theme="light">
    <NeoButton variant="primary">Save</NeoButton>
  </NeoProvider>
</template>
```

Import `@neo-skeuo/web-css/index.css` in your app entry. Components mirror the React primitive API with skeuo styling.

---

Part of [neo-skeuo](https://github.com/haithanh079/neo-skeuo). See [AGENTS.md](../../AGENTS.md) for stack routing.
