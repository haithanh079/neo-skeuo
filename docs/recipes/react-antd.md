# Recipe: React + Ant Design 5

Use when you need Ant components (Table, DatePicker, Form) with neo-skeuo theme.

## Install

```bash
npm install @neo-skeuo/antd @neo-skeuo/web-css antd
```

## App shell

```tsx
import { NeoSkeuoAntdProvider } from "@neo-skeuo/antd";
import { App as AntdApp, Button, Table } from "antd";
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";

export function App() {
  return (
    <NeoSkeuoAntdProvider theme="light">
      <AntdApp>
        <Button type="primary">Save</Button>
        <Table columns={[{ title: "Name", dataIndex: "name" }]} dataSource={[]} />
      </AntdApp>
    </NeoSkeuoAntdProvider>
  );
}
```

`NeoSkeuoAntdProvider` includes `NeoProvider`, `NeoSketchDefs`, and `ConfigProvider` with `toAntdTheme()`.

## Checklist

- [ ] Both `index.css` and `antd/index.css` imported
- [ ] Wrap with `AntdApp` for message/modal context (Ant recommendation)

Storybook: `Neo/Ant Design/*`.
