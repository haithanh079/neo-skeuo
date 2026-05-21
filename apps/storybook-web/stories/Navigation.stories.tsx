import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NeoBreadcrumb, NeoButton, NeoPagination, NeoPopover, NeoSteps, NeoTabs, NeoTooltip } from "@neo-skeuo/react";
import { primitiveMeta } from "./decorators";

const meta: Meta = {
  ...primitiveMeta,
  title: "Neo/Primitives/Navigation",
  component: NeoTabs,
};
export default meta;

function TabsDemo() {
  const [active, setActive] = useState("Library");
  return <NeoTabs tabs={["Library", "Bingo", "Users"]} active={active} onChange={setActive} />;
}

export const Tabs: StoryObj = {
  tags: ["agent-canonical"],
  parameters: {
    docs: {
      description: {
        component:
          "Tablist with `tabs` string[] or `items` with panels. Controlled via `active` + `onChange`.",
      },
    },
  },
  argTypes: {
    active: { control: "text", description: "Key of the active tab" },
    tabs: { control: "object", description: "Simple string labels when not using items[]" },
  },
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

export const Popover: StoryObj = {
  tags: ["agent-canonical"],
  parameters: {
    docs: {
      description: {
        component: "Click-triggered panel. Supports controlled `open` / `onOpenChange` or uncontrolled `defaultOpen`.",
      },
    },
  },
  argTypes: {
    content: { control: "text", description: "Panel body" },
    defaultOpen: { control: "boolean" },
  },
  render: () => (
    <NeoPopover content="Extra actions for this row">
      <NeoButton variant="ghost">Open popover</NeoButton>
    </NeoPopover>
  ),
};
