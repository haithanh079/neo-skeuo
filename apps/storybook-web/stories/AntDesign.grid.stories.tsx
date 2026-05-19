import type { Meta, StoryObj } from "@storybook/react";
import { Card, Col, Row, Typography } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Grid" };
export default meta;

export const RowColStory: StoryObj = {
  name: "Row & Col",
  render: () => (
    <Row gutter={[16, 16]}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <Col key={n} xs={24} sm={12} md={8}>
          <Card size="small" title={`Tile ${n}`}>
            <Typography.Text>Dashboard grid cell</Typography.Text>
          </Card>
        </Col>
      ))}
    </Row>
  ),
};
