import type { Meta, StoryObj } from "@storybook/react";
import { Card, Col, Descriptions, Row, Statistic, Table, Tag } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Data" };
export default meta;

export const TableStory: StoryObj = {
  name: "Table",
  render: () => (
    <Table
      size="middle"
      pagination={{ pageSize: 5, total: 12 }}
      columns={[
        { title: "Title", dataIndex: "title" },
        { title: "Author", dataIndex: "author" },
        { title: "Status", dataIndex: "status", render: (s: string) => <Tag>{s}</Tag> },
      ]}
      dataSource={[
        { key: "1", title: "The Hobbit", author: "Tolkien", status: "Available" },
        { key: "2", title: "1984", author: "Orwell", status: "Out" },
        { key: "3", title: "Dune", author: "Herbert", status: "Available" },
      ]}
    />
  ),
};

export const StatisticStory: StoryObj = {
  name: "Statistic",
  render: () => (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={8}>
        <Card>
          <Statistic title="Books" value={142} />
        </Card>
      </Col>
      <Col xs={24} sm={8}>
        <Card>
          <Statistic title="Checked out" value={28} />
        </Card>
      </Col>
      <Col xs={24} sm={8}>
        <Card>
          <Statistic title="Bingo lines" value={17} suffix="/ 25" />
        </Card>
      </Col>
    </Row>
  ),
};

export const DescriptionsStory: StoryObj = {
  name: "Descriptions",
  render: () => (
    <Descriptions bordered column={1} style={{ maxWidth: 480 }}>
      <Descriptions.Item label="Title">The Hobbit</Descriptions.Item>
      <Descriptions.Item label="Author">J.R.R. Tolkien</Descriptions.Item>
      <Descriptions.Item label="Status">
        <Tag color="default">Available</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Shelf">A-12</Descriptions.Item>
    </Descriptions>
  ),
};
