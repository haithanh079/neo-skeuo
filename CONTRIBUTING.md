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

## Working with AI agents

- Read [AGENTS.md](./AGENTS.md) and [llms.txt](./llms.txt) before generating code in this repo.
- One agent should own one row in **Subagent ownership** — avoid cross-package edits in a single PR.
- If you add or rename a public export in `packages/react`, run `npm run catalog:sync` and commit [docs/components.catalog.json](./docs/components.catalog.json).
- Canonical UI examples live in Storybook stories tagged `agent-canonical`.

## Publishing

Uses [Changesets](https://github.com/changesets/changesets).

1. Add a changeset: `npx changeset`
2. Bump versions: `npx changeset version` (commit the result)
3. Publish via CI: dispatch **Publish @neo-skeuo packages** (`.github/workflows/publish.yml`) with `NPM_TOKEN`, or locally: `npm run build:packages && npm run test:packages && npx changeset publish`
