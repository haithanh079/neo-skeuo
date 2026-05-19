import type { Meta, StoryObj } from "@storybook/react";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select, Space, Switch } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Form" };
export default meta;

export const InputStory: StoryObj = {
  name: "Input",
  render: () => (
    <Space direction="vertical" style={{ width: 320 }}>
      <Input placeholder="Title" />
      <Input.Password placeholder="Password" />
      <Input.TextArea placeholder="Notes" rows={3} />
    </Space>
  ),
};

export const InputNumberStory: StoryObj = {
  name: "InputNumber",
  render: () => <InputNumber min={0} max={99} defaultValue={3} style={{ width: 160 }} />,
};

export const SelectStory: StoryObj = {
  name: "Select",
  render: () => (
    <Select
      style={{ width: 240 }}
      placeholder="Category"
      options={[
        { value: "fiction", label: "Fiction" },
        { value: "nonfiction", label: "Non-fiction" },
      ]}
    />
  ),
};

export const DatePickerStory: StoryObj = {
  name: "DatePicker",
  render: () => <DatePicker style={{ width: 240 }} />,
};

export const CheckboxRadioSwitchStory: StoryObj = {
  name: "Checkbox & Radio & Switch",
  render: () => (
    <Space direction="vertical" size="middle">
      <Checkbox defaultChecked>Remember me</Checkbox>
      <Radio.Group defaultValue="a">
        <Radio value="a">Option A</Radio>
        <Radio value="b">Option B</Radio>
      </Radio.Group>
      <Switch defaultChecked />
    </Space>
  ),
};

export const FormStory: StoryObj = {
  name: "Form",
  render: () => (
    <Form layout="vertical" style={{ maxWidth: 360 }} initialValues={{ active: true }}>
      <Form.Item label="Title" name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Copies" name="copies">
        <InputNumber min={1} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Published" name="published">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Active" name="active" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  ),
};
