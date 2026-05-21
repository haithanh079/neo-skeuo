# @neo-skeuo

Neo-skeuomorphic UI kit — publishable npm monorepo.

**AI agents:** start with [AGENTS.md](./AGENTS.md) and [llms.txt](./llms.txt).

## Packages

| Package | Description | Maturity |
|---------|-------------|----------|
| `@neo-skeuo/tokens` | Light/dark tokens, `toAntdTheme`, `getSurfaceStyle` | Production |
| `@neo-skeuo/assets` | SVG borders and paper textures | Production |
| `@neo-skeuo/web-css` | CSS variables, primitives, Ant overrides | Production (web) |
| `@neo-skeuo/react` | React primitives + `NeoProvider` | Beta — see [react README](./packages/react/README.md) |
| `@neo-skeuo/antd` | Ant Design 5 theme provider | Production |
| `@neo-skeuo/refine` | Ant Design admin shell + optional Refine wrapper | Beta |
| `@neo-skeuo/vue` | Vue 3 primitives | Alpha |
| `@neo-skeuo/ant-design-vue` | Ant Design Vue theme provider | Alpha |
| `@neo-skeuo/svelte` | Svelte 5 SFC primitives (5 components) | Alpha |
| `@neo-skeuo/react-native` | React Native primitives | Alpha |

`build:packages` builds compiled TS packages. `@neo-skeuo/svelte` and `@neo-skeuo/web-css` ship source/static files without a compile step.

## Quick start (React + Ant admin)

```bash
npm install @neo-skeuo/refine @neo-skeuo/web-css
```

```tsx
import { NeoRefineRoot, NeoRefineApp } from "@neo-skeuo/refine";
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";
```

Use `NeoRefineRoot` for themed Ant Design only. Use `NeoRefineApp` when you also use `@refinedev/core` (wraps `<Refine>`).

See [MIGRATION.md](./MIGRATION.md) for moving off inline admin themes.
