# Recipe: Vue 3 (Alpha)

Only use when the user explicitly requests Vue. API mirrors React primitives; subset may lag.

## Install

```bash
npm install @neo-skeuo/vue @neo-skeuo/web-css
```

## App shell

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

```ts
// main.ts
import "@neo-skeuo/web-css/index.css";
```

For Ant Design Vue, see `@neo-skeuo/ant-design-vue` (Alpha).
