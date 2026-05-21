# Recipe: Svelte 5 (Alpha)

Five SFCs only: `NeoProvider`, `NeoButton`, `NeoSurface`, `NeoInput`, `NeoCard`.

## Install

```bash
npm install @neo-skeuo/svelte @neo-skeuo/web-css
```

## App shell

```svelte
<script>
  import NeoProvider from "@neo-skeuo/svelte/NeoProvider.svelte";
  import NeoButton from "@neo-skeuo/svelte/NeoButton.svelte";
</script>

<NeoProvider theme="light">
  <NeoButton variant="primary">Save</NeoButton>
</NeoProvider>
```

```ts
// main.ts
import "@neo-skeuo/web-css/index.css";
```

Runnable demo: [apps/example-sveltekit](../../apps/example-sveltekit).
