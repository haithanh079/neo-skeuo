import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: { name: "@storybook/react-vite", options: {} },
  async viteFinal(config) {
    return mergeConfig(config, {
      esbuild: {
        ...config.esbuild,
        jsx: "automatic",
        jsxImportSource: "react",
      },
    });
  },
};
export default config;
