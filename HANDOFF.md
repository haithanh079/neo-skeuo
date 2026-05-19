# Moving `neo-skeuo` out of Book Bingo Fair

After you move this folder to its own repo (sibling or new Git remote):

```bash
cd neo-skeuo
npm install --legacy-peer-deps
npm run build:packages
npm run storybook
```

## Publish

- Configure `NPM_TOKEN` in GitHub Actions secrets.
- Run workflow **Publish @neo-skeuo packages** (`.github/workflows/publish.yml`).
- Uses [Changesets](https://github.com/changesets/changesets): add a changeset, merge, then dispatch publish.

## Book Bingo Fair consumer

In the app repo, remove `neo-skeuo/` from workspaces and install from npm:

```bash
npm install @neo-skeuo/refine @neo-skeuo/web-css @neo-skeuo/react @neo-skeuo/antd
```

Or use `file:../neo-skeuo/packages/<name>` while developing both repos side by side.

See [MIGRATION.md](./MIGRATION.md) for admin theme migration steps.
