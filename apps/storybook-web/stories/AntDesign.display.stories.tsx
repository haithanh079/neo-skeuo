import type { Meta, StoryObj } from "@storybook/react";
import { Card, Divider, Space, Tag, Typography } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Display" };
export default meta;

const { Title, Text, Paragraph } = Typography;

export const TypographyStory: StoryObj = {
  name: "Typography",
  render: () => (
    <Space direction="vertical" size="small">
      <Title level={2} style={{ margin: 0 }}>
        Library
      </Title>
      <Text type="secondary">Manage catalog entries</Text>
      <Paragraph style={{ marginBottom: 0 }}>Import CSV or edit books one at a time.</Paragraph>
    </Space>
  ),
};

export const CardStory: StoryObj = {
  name: "Card",
  render: () => (
    <Card title="Library stats" style={{ maxWidth: 360 }}>
      <Text>142 books · 28 checked out</Text>
    </Card>
  ),
};

export const TagStory: StoryObj = {
  name: "Tag",
  render: () => (
    <Space wrap>
      <Tag>Default</Tag>
      <Tag color="success">Available</Tag>
      <Tag color="warning">Pending</Tag>
      <Tag color="error">Overdue</Tag>
    </Space>
  ),
};

export const DividerStory: StoryObj = {
  name: "Divider",
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <Text>Section one</Text>
      <Divider />
      <Text>Section two</Text>
    </div>
  ),
};
