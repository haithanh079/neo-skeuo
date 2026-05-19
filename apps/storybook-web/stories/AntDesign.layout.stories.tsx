import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Layout, Menu, Typography } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Layout" };
export default meta;

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: "dashboard", label: "Dashboard" },
  { key: "library", label: "Library" },
  { key: "bingo", label: "Bingo" },
  { key: "users", label: "Users" },
];

function AdminShellDemo() {
  const [selected, setSelected] = useState("library");
  return (
    <Layout style={{ minHeight: 360, border: "2px solid var(--neo-ink)", borderRadius: 12, overflow: "hidden" }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" selectedKeys={[selected]} items={menuItems} onClick={(e) => setSelected(e.key)} />
      </Sider>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center", paddingInline: 16, background: "var(--neo-surface)" }}>
          <Typography.Text strong>Admin CMS</Typography.Text>
        </Header>
        <Content style={{ padding: 24, background: "var(--neo-paper)" }}>
          <Typography.Title level={4} style={{ marginTop: 0 }}>
            {menuItems.find((m) => m.key === selected)?.label}
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: 0 }}>Page content area</Typography.Paragraph>
        </Content>
      </Layout>
    </Layout>
  );
}

export const LayoutStory: StoryObj = {
  name: "Layout",
  render: () => <AdminShellDemo />,
};

export const MenuStory: StoryObj = {
  name: "Menu",
  render: () => (
    <Menu
      mode="inline"
      defaultSelectedKeys={["library"]}
      style={{ width: 220, border: "2px solid var(--neo-ink)", borderRadius: 8 }}
      items={menuItems}
    />
  ),
};
