import type { Meta, StoryObj } from "@storybook/react";
import { NeoCard, NeoDivider, NeoSurface } from "@neo-skeuo/react";
import { primitiveMeta } from "./decorators";

const meta: Meta = {
  ...primitiveMeta,
  title: "Neo/Primitives/Layout",
};
export default meta;

export const Surfaces: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <NeoSurface elevation="flat" style={{ padding: 16, width: 100 }}>
        Flat
      </NeoSurface>
      <NeoSurface elevation="raised" style={{ padding: 16, width: 100 }}>
        Raised
      </NeoSurface>
      <NeoSurface elevation="inset" style={{ padding: 16, width: 100 }}>
        Inset
      </NeoSurface>
      <NeoSurface elevation="pressed" style={{ padding: 16, width: 100 }}>
        Pressed
      </NeoSurface>
    </div>
  ),
};

export const Card: StoryObj = {
  render: () => (
    <NeoCard style={{ maxWidth: 360 }}>
      <strong>NeoCard</strong>
      <p style={{ margin: "8px 0 0" }}>Raised panel with sketch border and inner spacing.</p>
    </NeoCard>
  ),
};

export const Divider: StoryObj = {
  render: () => (
    <NeoCard style={{ maxWidth: 360 }}>
      <p>Above</p>
      <NeoDivider />
      <p>Below</p>
    </NeoCard>
  ),
};
