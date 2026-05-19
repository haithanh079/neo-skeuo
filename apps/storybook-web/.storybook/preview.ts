import React from "react";
import type { Preview } from "@storybook/react";
import "@neo-skeuo/web-css/index.css";
import "@neo-skeuo/web-css/antd/index.css";
import "@neo-skeuo/web-css/refine.css";

const preview: Preview = {
  globalTypes: {
    neoTheme: {
      description: "Neo theme",
      toolbar: {
        title: "Theme",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) =>
      React.createElement(
        "div",
        {
          className: "neo-skeuo",
          "data-neo-theme": ctx.globals.neoTheme ?? "light",
          style: { padding: 24, minHeight: 200 },
        },
        React.createElement(Story),
      ),
  ],
};
export default preview;
