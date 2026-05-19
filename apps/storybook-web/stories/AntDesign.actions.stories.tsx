import type { Meta, StoryObj } from "@storybook/react";
import { Button, Pagination, Space } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Actions" };
export default meta;

export const ButtonStory: StoryObj = {
  name: "Button",
  render: () => (
    <Space wrap>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button danger>Danger</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button size="small">Small</Button>
    </Space>
  ),
};

export const PaginationStory: StoryObj = {
  name: "Pagination",
  render: () => <Pagination defaultCurrent={2} total={50} showSizeChanger />,
};
