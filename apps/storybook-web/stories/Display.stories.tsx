import type { Meta, StoryObj } from "@storybook/react";
import { NeoAvatar, NeoBadge, NeoTag } from "@neo-skeuo/react";
import { primitiveMeta } from "./decorators";

const meta: Meta = {
  ...primitiveMeta,
  title: "Neo/Primitives/Display",
};
export default meta;

export const BadgeAndTag: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <NeoBadge>Draft</NeoBadge>
      <NeoTag>Published</NeoTag>
      <NeoBadge>3</NeoBadge>
    </div>
  ),
};

export const Avatar: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <NeoAvatar label="Ada" />
      <NeoAvatar label="Book" />
    </div>
  ),
};
