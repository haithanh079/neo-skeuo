# @neo-skeuo/svelte

Svelte 5 SFC primitives (subset). Import CSS from `@neo-skeuo/web-css`.

```svelte
<script>
  import NeoButton from "@neo-skeuo/svelte/NeoButton.svelte";
</script>

<NeoButton variant="primary">Save</NeoButton>
```

Available SFCs: `NeoProvider`, `NeoButton`, `NeoSurface`, `NeoInput`, `NeoCard`.

The package main entry exports token utilities only; import components via subpath exports.
