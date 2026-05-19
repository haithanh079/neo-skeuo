import type { Meta, StoryObj } from "@storybook/react";
import { Button, Space, Typography } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Refine" };
export default meta;

/** Refine list/create/edit chrome classes from @neo-skeuo/web-css/refine */
export const PageChrome: StoryObj = {
  name: "Page chrome",
  render: () => (
    <Space direction="vertical" size="large" style={{ width: "100%", maxWidth: 640 }}>
      <div className="refine-pageHeader-title">
        <Typography.Title level={3} style={{ margin: 0 }}>
          Library
        </Typography.Title>
      </div>
      <Space wrap>
        <Button type="primary" className="refine-create-button">
          Create
        </Button>
        <Button className="refine-list-button">Refresh</Button>
        <Button className="refine-edit-button">Edit</Button>
        <Button className="refine-show-button">Show</Button>
        <Button danger className="refine-delete-button">
          Delete
        </Button>
        <Button type="primary" className="refine-save-button">
          Save
        </Button>
      </Space>
    </Space>
  ),
};
