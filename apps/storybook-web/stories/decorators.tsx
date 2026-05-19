import React, { useState, type ReactNode } from "react";
import type { Decorator, Meta } from "@storybook/react";
import { NeoProvider, NeoSketchDefs } from "@neo-skeuo/react";
import { App as AntdApp } from "antd";
import { NeoSkeuoAntdProvider } from "@neo-skeuo/antd";

export const withNeoPrimitives: Decorator = (Story) => (
  <NeoProvider>
    <NeoSketchDefs />
    <Story />
  </NeoProvider>
);

export const withNeoAntd: Decorator = (Story) => (
  <NeoSkeuoAntdProvider>
    <AntdApp>
      <Story />
    </AntdApp>
  </NeoSkeuoAntdProvider>
);

export const primitiveMeta: Meta = {
  decorators: [withNeoPrimitives],
  parameters: { layout: "padded" },
};

export const antdMeta: Meta = {
  decorators: [withNeoAntd],
  parameters: { layout: "padded" },
};

/** Stateful helper for stories that need hooks */
export function Stateful({ children }: { children: (api: { key: number; reset: () => void }) => ReactNode }) {
  const [key, setKey] = useState(0);
  return <>{children({ key, reset: () => setKey((k) => k + 1) })}</>;
}
