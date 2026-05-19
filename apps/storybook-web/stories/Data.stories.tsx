import type { Meta, StoryObj } from "@storybook/react";
import { NeoList, NeoTable } from "@neo-skeuo/react";
import { primitiveMeta } from "./decorators";

const meta: Meta = {
  ...primitiveMeta,
  title: "Neo/Primitives/Data",
};
export default meta;

export const Table: StoryObj = {
  render: () => (
    <NeoTable
      columns={["Title", "Author", "Status"]}
      rows={[
        ["The Hobbit", "Tolkien", "Available"],
        ["1984", "Orwell", "Checked out"],
        ["Dune", "Herbert", "Available"],
      ]}
    />
  ),
};

export const List: StoryObj = {
  render: () => <NeoList items={["Import CSV", "Moderate returns", "View leaderboard"]} />,
};
