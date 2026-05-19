import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Collapse,
  Drawer,
  Empty,
  List,
  Result,
  Steps,
  Tabs,
  Timeline,
  Transfer,
  Typography,
  Upload,
} from "antd";
import type { TransferProps, UploadProps } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Tier 2/Content" };
export default meta;

function DrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer title="Filters" open={open} onClose={() => setOpen(false)}>
        <Typography.Paragraph>Filter library by category or status.</Typography.Paragraph>
      </Drawer>
    </>
  );
}

export const DrawerStory: StoryObj = {
  name: "Drawer",
  render: () => <DrawerDemo />,
};

const uploadProps: UploadProps = {
  name: "file",
  multiple: false,
  beforeUpload: () => false,
};

export const UploadStory: StoryObj = {
  name: "Upload",
  render: () => (
    <Upload.Dragger {...uploadProps} style={{ maxWidth: 420 }}>
      <p>Click or drag a CSV here</p>
      <Typography.Text type="secondary">Library import</Typography.Text>
    </Upload.Dragger>
  ),
};

export const TabsStory: StoryObj = {
  name: "Tabs",
  render: () => (
    <Tabs
      style={{ maxWidth: 480 }}
      items={[
        { key: "all", label: "All books", children: "142 titles" },
        { key: "out", label: "Checked out", children: "28 titles" },
        { key: "hold", label: "On hold", children: "5 titles" },
      ]}
    />
  ),
};

export const StepsStory: StoryObj = {
  name: "Steps",
  render: () => (
    <Steps
      current={1}
      style={{ maxWidth: 560 }}
      items={[{ title: "Details" }, { title: "Categories" }, { title: "Review" }]}
    />
  ),
};

export const ResultStory: StoryObj = {
  name: "Result",
  render: () => (
    <Result status="success" title="Import complete" subTitle="240 books added to the catalog." extra={<Button type="primary">View library</Button>} />
  ),
};

export const EmptyStory: StoryObj = {
  name: "Empty",
  render: () => <Empty description="No returns pending" />,
};

interface RecordType {
  key: string;
  title: string;
}

const transferData: RecordType[] = [
  { key: "1", title: "The Hobbit" },
  { key: "2", title: "1984" },
  { key: "3", title: "Dune" },
];

function TransferDemo() {
  const [targetKeys, setTargetKeys] = useState<TransferProps["targetKeys"]>(["1"]);
  return (
    <Transfer
      dataSource={transferData}
      titles={["Available", "Bingo board"]}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      render={(item) => item.title}
      listStyle={{ width: 220, height: 220 }}
    />
  );
}

export const TransferStory: StoryObj = {
  name: "Transfer",
  render: () => <TransferDemo />,
};

export const TimelineStory: StoryObj = {
  name: "Timeline",
  render: () => (
    <Timeline
      style={{ maxWidth: 420 }}
      items={[
        { children: "Book checked out — 9:00" },
        { children: "Reminder sent — 12:00" },
        { color: "green", children: "Returned — 15:30" },
      ]}
    />
  ),
};

export const CollapseStory: StoryObj = {
  name: "Collapse",
  render: () => (
    <Collapse
      style={{ maxWidth: 480 }}
      items={[
        { key: "1", label: "Fiction", children: "42 books" },
        { key: "2", label: "Non-fiction", children: "58 books" },
      ]}
    />
  ),
};

export const ListStory: StoryObj = {
  name: "List",
  render: () => (
    <List
      style={{ maxWidth: 420 }}
      bordered
      dataSource={["Import CSV", "Moderate returns", "Export leaderboard"]}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  ),
};
