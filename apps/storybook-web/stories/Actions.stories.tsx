import type { Meta, StoryObj } from "@storybook/react";
import { NeoButton } from "@neo-skeuo/react";
import { primitiveMeta } from "./decorators";

const meta: Meta = {
  ...primitiveMeta,
  title: "Neo/Primitives/Actions",
};
export default meta;

const row = { display: "flex", gap: 8, flexWrap: "wrap" as const, alignItems: "center" };

export const ButtonVariants: StoryObj = {
  render: () => (
    <>
      <div style={row}>
        <NeoButton>Default</NeoButton>
        <NeoButton variant="primary">Primary</NeoButton>
        <NeoButton variant="ghost">Ghost</NeoButton>
        <NeoButton variant="danger">Danger</NeoButton>
      </div>
      <div style={{ ...row, marginTop: 12 }}>
        <NeoButton loading>Loading</NeoButton>
        <NeoButton disabled>Disabled</NeoButton>
      </div>
    </>
  ),
};
