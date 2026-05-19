# @neo-skeuo/react-native

React Native primitives using `@neo-skeuo/tokens` `getSurfaceStyle` for native elevations.

```tsx
import { NeoProvider, NeoButton, NeoSurface } from "@neo-skeuo/react-native";

<NeoProvider theme="light">
  <NeoSurface elevation="raised">
    <NeoButton variant="primary">Save</NeoButton>
  </NeoSurface>
</NeoProvider>
```

Navigation and table components have basic implementations; sketch SVG filters are web-only.
