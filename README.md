# @neo-skeuo

[![npm version](https://img.shields.io/npm/v/@neo-skeuo/tokens.svg)](https://www.npmjs.com/package/@neo-skeuo/tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![GitHub](https://img.shields.io/github/stars/haithanh079/neo-skeuo?style=social)](https://github.com/haithanh079/neo-skeuo)

Neo-skeuomorphic UI kit — design tokens, CSS primitives, and thin framework adapters. Publishable npm monorepo.

**AI agents:** start with [AGENTS.md](./AGENTS.md) and [llms.txt](./llms.txt).

## Features

- Light/dark design tokens with Ant Design theme serialization (`@neo-skeuo/tokens`)
- CSS variables, primitives, and Ant/Refine overrides (`@neo-skeuo/web-css`)
- React primitives with skeuo surfaces (`@neo-skeuo/react`)
- Ant Design 5 and Refine admin shells (`@neo-skeuo/antd`, `@neo-skeuo/refine`)
- Optional Vue, Svelte, React Native, and Ant Design Vue adapters (alpha maturity)

## Packages

| Package | npm | Maturity |
|---------|-----|----------|
| [`@neo-skeuo/tokens`](./packages/tokens) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/tokens.svg)](https://www.npmjs.com/package/@neo-skeuo/tokens) | Production |
| [`@neo-skeuo/assets`](./packages/assets) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/assets.svg)](https://www.npmjs.com/package/@neo-skeuo/assets) | Production |
| [`@neo-skeuo/web-css`](./packages/web-css) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/web-css.svg)](https://www.npmjs.com/package/@neo-skeuo/web-css) | Production |
| [`@neo-skeuo/react`](./packages/react) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/react.svg)](https://www.npmjs.com/package/@neo-skeuo/react) | Beta |
| [`@neo-skeuo/antd`](./packages/antd) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/antd.svg)](https://www.npmjs.com/package/@neo-skeuo/antd) | Production |
| [`@neo-skeuo/refine`](./packages/refine) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/refine.svg)](https://www.npmjs.com/package/@neo-skeuo/refine) | Beta |
| [`@neo-skeuo/vue`](./packages/vue) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/vue.svg)](https://www.npmjs.com/package/@neo-skeuo/vue) | Alpha |
| [`@neo-skeuo/ant-design-vue`](./packages/ant-design-vue) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/ant-design-vue.svg)](https://www.npmjs.com/package/@neo-skeuo/ant-design-vue) | Alpha |
| [`@neo-skeuo/svelte`](./packages/svelte) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/svelte.svg)](https://www.npmjs.com/package/@neo-skeuo/svelte) | Alpha |
| [`@neo-skeuo/react-native`](./packages/react-native) | [![npm](https://img.shields.io/npm/v/@neo-skeuo/react-native.svg)](https://www.npmjs.com/package/@neo-skeuo/react-native) | Alpha |

Each package README lives under `packages/<name>/README.md` with install steps and examples.

`build:packages` builds compiled TypeScript packages. `@neo-skeuo/svelte` and `@neo-skeuo/web-css` ship source/static files without a compile step.

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

Stack-specific setup: [docs/recipes/](docs/recipes/) and [AGENTS.md](./AGENTS.md).

## Development

```bash
git clone https://github.com/haithanh079/neo-skeuo.git
cd neo-skeuo
npm install
npm run build:packages
npm run test:packages
npm run storybook
```

Sync npm metadata after editing [package-metadata.shared.json](./package-metadata.shared.json):

```bash
npm run metadata:sync
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Please read our [Code of Conduct](./.github/CODE_OF_CONDUCT.md).

Report security issues via [SECURITY.md](./.github/SECURITY.md) — do not file public issues for vulnerabilities.

## License

[MIT](./LICENSE) © haithanh079
