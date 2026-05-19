import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["vue", "ant-design-vue", "@neo-skeuo/vue", "@neo-skeuo/tokens"],
  tsconfig: "tsconfig.json",
});
