import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dropdown, Modal, Popconfirm, Space, Tooltip } from "antd";
import type { MenuProps } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Overlay" };
export default meta;

const dropdownItems: MenuProps["items"] = [
  { key: "edit", label: "Edit" },
  { key: "duplicate", label: "Duplicate" },
  { type: "divider" },
  { key: "delete", label: "Delete", danger: true },
];

function ModalStoryDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal title="Import library" open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
        Upload a CSV to replace the catalog.
      </Modal>
    </>
  );
}

export const ModalStory: StoryObj = {
  name: "Modal",
  render: () => <ModalStoryDemo />,
};

export const DropdownStory: StoryObj = {
  name: "Dropdown",
  render: () => (
    <Dropdown menu={{ items: dropdownItems }} trigger={["click"]}>
      <Button>Row actions</Button>
    </Dropdown>
  ),
};

export const PopconfirmStory: StoryObj = {
  name: "Popconfirm",
  render: () => (
    <Popconfirm title="Delete this book?" description="This cannot be undone." okText="Delete" okButtonProps={{ danger: true }}>
      <Button danger>Delete</Button>
    </Popconfirm>
  ),
};

export const TooltipStory: StoryObj = {
  name: "Tooltip",
  render: () => (
    <Space>
      <Tooltip title="Mark as returned">
        <Button>Hover me</Button>
      </Tooltip>
      <Tooltip title="Only librarians can import">
        <Button disabled>Import CSV</Button>
      </Tooltip>
    </Space>
  ),
};
