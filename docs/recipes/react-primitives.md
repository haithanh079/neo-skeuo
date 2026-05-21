# Recipe: React primitives

Minimal `@neo-skeuo/react` app with form + modal. Runnable reference: `apps/storybook-web` decorators.

## Install

```bash
npm install @neo-skeuo/react @neo-skeuo/web-css
```

## App shell

```tsx
import { NeoProvider, NeoSketchDefs, NeoButton, NeoField, NeoInput, NeoModal } from "@neo-skeuo/react";
import "@neo-skeuo/web-css/index.css";
import { useState } from "react";

export function App() {
  const [open, setOpen] = useState(false);

  return (
    <NeoProvider theme="light">
      <NeoSketchDefs />
      <NeoField label="Title" htmlFor="title" required>
        <NeoInput id="title" placeholder="Book title" />
      </NeoField>
      <NeoButton variant="primary" onClick={() => setOpen(true)}>
        Save
      </NeoButton>
      <NeoModal open={open} title="Confirm" onClose={() => setOpen(false)}>
        <p>Save changes?</p>
      </NeoModal>
    </NeoProvider>
  );
}
```

## Checklist

- [ ] `NeoSketchDefs` rendered once inside `NeoProvider`
- [ ] `@neo-skeuo/web-css/index.css` imported before app CSS
- [ ] Root has `neo-skeuo` class (default on `NeoProvider`)

## Verify

```bash
npm run build:packages
npm run test:packages
```

Storybook: `Neo/Primitives/Form`, `Neo/Primitives/Feedback/Modal`.
