# Contributing to @neo-skeuo

## Monorepo layout

- `packages/tokens` — design tokens (light/dark)
- `packages/web-css` — CSS + Ant overrides
- `packages/react`, `vue`, `svelte`, `react-native` — primitives
- `packages/antd`, `refine`, `ant-design-vue` — framework adapters

## Subagent ownership

| Agent | Directory |
|-------|-----------|
| A | root infra, CI |
| B | `packages/tokens` |
| C | `packages/assets` |
| D–E | `packages/web-css` |
| F | `packages/react` |
| G | `packages/antd` |
| H | `packages/refine` |
| I | `packages/react-native` |
| J | `packages/vue`, `packages/ant-design-vue` |
| K | `packages/svelte` |
| L | `apps/storybook-web` |

## Commands

```bash
npm install
npm run build:packages
npm run test:packages
npm run storybook
```

## Publishing

Uses [Changesets](https://github.com/changesets/changesets). Add a changeset, merge, then run the publish workflow with `NPM_TOKEN`.
