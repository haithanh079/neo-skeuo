# @neo-skeuo/vue

Vue 3 primitives using `@neo-skeuo/web-css` classes.

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
