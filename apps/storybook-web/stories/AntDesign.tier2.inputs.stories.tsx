import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AutoComplete,
  Cascader,
  DatePicker,
  Mentions,
  Progress,
  Rate,
  Segmented,
  Space,
  TreeSelect,
  Typography,
} from "antd";
import type { CascaderProps } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Tier 2/Inputs" };
export default meta;

const { RangePicker } = DatePicker;

const autoOptions = [{ value: "The Hobbit" }, { value: "The Fellowship" }, { value: "1984" }];

export const AutoCompleteStory: StoryObj = {
  name: "AutoComplete",
  render: () => <AutoComplete style={{ width: 280 }} options={autoOptions} placeholder="Search titles" />,
};

const cascaderOptions: CascaderProps["options"] = [
  {
    value: "fiction",
    label: "Fiction",
    children: [
      { value: "fantasy", label: "Fantasy" },
      { value: "scifi", label: "Sci-fi" },
    ],
  },
  { value: "nonfiction", label: "Non-fiction" },
];

export const CascaderStory: StoryObj = {
  name: "Cascader",
  render: () => <Cascader style={{ width: 280 }} options={cascaderOptions} placeholder="Category" />,
};

const treeData = [
  {
    title: "Library",
    value: "library",
    children: [
      { title: "Available", value: "available" },
      { title: "Checked out", value: "out" },
    ],
  },
];

export const TreeSelectStory: StoryObj = {
  name: "TreeSelect",
  render: () => <TreeSelect style={{ width: 280 }} treeData={treeData} placeholder="Shelf" treeDefaultExpandAll />,
};

export const MentionsStory: StoryObj = {
  name: "Mentions",
  render: () => (
    <Mentions style={{ width: 360 }} rows={3} placeholder="Note for @librarian">
      @admin
    </Mentions>
  ),
};

export const TimePickerStory: StoryObj = {
  name: "TimePicker",
  render: () => <DatePicker.TimePicker style={{ width: 200 }} />,
};

export const RangePickerStory: StoryObj = {
  name: "RangePicker",
  render: () => <RangePicker style={{ width: 320 }} />,
};

export const RateStory: StoryObj = {
  name: "Rate",
  render: () => <Rate defaultValue={3} />,
};

function SegmentedDemo() {
  const [view, setView] = useState<string | number>("grid");
  return (
    <Segmented
      options={[
        { label: "Grid", value: "grid" },
        { label: "List", value: "list" },
      ]}
      value={view}
      onChange={setView}
    />
  );
}

export const SegmentedStory: StoryObj = {
  name: "Segmented",
  render: () => (
    <Space direction="vertical">
      <SegmentedDemo />
      <Typography.Text type="secondary">Toggle catalog view</Typography.Text>
    </Space>
  ),
};

export const ProgressStory: StoryObj = {
  name: "Progress",
  render: () => (
    <Space direction="vertical" style={{ width: 320 }}>
      <Progress percent={30} />
      <Progress percent={70} status="active" />
      <Progress percent={100} />
    </Space>
  ),
};
