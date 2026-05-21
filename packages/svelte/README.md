# @neo-skeuo/svelte

[![npm version](https://img.shields.io/npm/v/@neo-skeuo/svelte.svg)](https://www.npmjs.com/package/@neo-skeuo/svelte)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

Svelte 5 SFC primitives (subset). Import CSS from `@neo-skeuo/web-css`. **Alpha** maturity.

```bash
npm install @neo-skeuo/svelte @neo-skeuo/web-css svelte
```

```svelte
<script>
  import NeoButton from "@neo-skeuo/svelte/NeoButton.svelte";
</script>

<NeoButton variant="primary">Save</NeoButton>
```

Available SFCs: `NeoProvider`, `NeoButton`, `NeoSurface`, `NeoInput`, `NeoCard`.

The package main entry exports token utilities only; import components via subpath exports.

---

Part of [neo-skeuo](https://github.com/haithanh079/neo-skeuo). See [AGENTS.md](../../AGENTS.md) for stack routing.
