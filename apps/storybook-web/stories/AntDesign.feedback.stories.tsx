import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, App, Button, Skeleton, Space, Spin } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Feedback" };
export default meta;

export const AlertStory: StoryObj = {
  name: "Alert",
  render: () => (
    <Space direction="vertical" style={{ width: 400 }}>
      <Alert message="Info" description="Catalog sync runs nightly." type="info" showIcon />
      <Alert message="Success" type="success" showIcon />
      <Alert message="Warning" type="warning" showIcon />
      <Alert message="Error" type="error" showIcon />
    </Space>
  ),
};

export const SpinStory: StoryObj = {
  name: "Spin",
  render: () => (
    <Space size="large">
      <Spin />
      <Spin tip="Loading…" size="large">
        <div style={{ width: 120, height: 80, background: "var(--neo-inset)", borderRadius: 8 }} />
      </Spin>
    </Space>
  ),
};

export const SkeletonStory: StoryObj = {
  name: "Skeleton",
  render: () => <Skeleton active paragraph={{ rows: 3 }} style={{ maxWidth: 400 }} />,
};

function MessageNotificationDemo() {
  const { message, notification } = App.useApp();
  return (
    <Space wrap>
      <Button onClick={() => message.success("Saved")}>Success message</Button>
      <Button onClick={() => message.error("Something went wrong")}>Error message</Button>
      <Button
        onClick={() =>
          notification.info({
            message: "Import started",
            description: "We will email you when the CSV finishes processing.",
          })
        }
      >
        Notification
      </Button>
    </Space>
  );
}

export const MessageStory: StoryObj = {
  name: "Message",
  render: () => <MessageNotificationDemo />,
};

export const NotificationStory: StoryObj = {
  name: "Notification",
  render: () => <MessageNotificationDemo />,
};
