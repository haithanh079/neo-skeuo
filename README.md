# @neo-skeuo

Neo-skeuomorphic UI kit — publishable npm monorepo.

## Packages

| Package | Description |
|---------|-------------|
| `@neo-skeuo/tokens` | Light/dark tokens, `toAntdTheme`, `getSurfaceStyle` |
| `@neo-skeuo/assets` | SVG borders and paper textures |
| `@neo-skeuo/web-css` | CSS variables, Ant overrides, Refine chrome |
| `@neo-skeuo/react` | React primitives + `NeoProvider` |
| `@neo-skeuo/antd` | Ant Design 5 provider |
| `@neo-skeuo/refine` | Refine admin shell |
| `@neo-skeuo/vue` | Vue 3 primitives |
| `@neo-skeuo/ant-design-vue` | Ant Design Vue provider |
| `@neo-skeuo/svelte` | Svelte 5 SFC primitives |
| `@neo-skeuo/react-native` | React Native primitives |

## Quick start (React + Refine)

```bash
npm install @neo-skeuo/refine @neo-skeuo/web-css
```

```tsx
import { NeoRefineRoot } from "@neo-skeuo/refine";
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";
```

See [MIGRATION.md](./MIGRATION.md) for moving off inline admin themes.
