import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NeoBreadcrumb, NeoButton, NeoPagination, NeoSteps, NeoTabs, NeoTooltip } from "@neo-skeuo/react";
import { primitiveMeta } from "./decorators";

const meta: Meta = {
  ...primitiveMeta,
  title: "Neo/Primitives/Navigation",
};
export default meta;

function TabsDemo() {
  const [active, setActive] = useState("Library");
  return <NeoTabs tabs={["Library", "Bingo", "Users"]} active={active} onChange={setActive} />;
}

export const Tabs: StoryObj = {
  render: () => <TabsDemo />,
};

export const Breadcrumb: StoryObj = {
  render: () => (
    <NeoBreadcrumb
      items={[
        { label: "Admin", href: "#" },
        { label: "Library", href: "#" },
        { label: "Edit book" },
      ]}
    />
  ),
};

function PaginationDemo() {
  const [page, setPage] = useState(1);
  return <NeoPagination page={page} total={5} onChange={setPage} />;
}

export const Pagination: StoryObj = {
  render: () => <PaginationDemo />,
};

export const Steps: StoryObj = {
  render: () => <NeoSteps steps={["Details", "Categories", "Review"]} current={1} />,
};

export const Tooltip: StoryObj = {
  render: () => (
    <NeoTooltip label="Delete this row">
      <NeoButton variant="ghost">Hover me</NeoButton>
    </NeoTooltip>
  ),
};
