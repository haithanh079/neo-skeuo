import { getTokens } from "./palettes.js";
import type { NeoResolvedTheme } from "./types.js";

/**
 * Ant Design 5 `ThemeConfig`-compatible object.
 * Use with `ConfigProvider` or via `NeoSkeuoAntdProvider` from `@neo-skeuo/antd`.
 */
export function toAntdTheme(mode: NeoResolvedTheme) {
  const t = getTokens(mode);
  const { ink, paper, surface, inkMuted, inkFaint, inset } = t.color;

  return {
    token: {
      colorPrimary: ink,
      colorText: ink,
      colorTextSecondary: inkMuted,
      colorTextTertiary: inkFaint,
      colorTextQuaternary: inkFaint,
      colorBgLayout: paper,
      colorBgContainer: surface,
      colorBgElevated: surface,
      colorBorder: ink,
      colorBorderSecondary: mode === "light" ? "rgba(26, 26, 26, 0.35)" : "rgba(242, 239, 232, 0.25)",
      colorFillAlter: inset,
      colorFillSecondary: mode === "light" ? "rgba(26, 26, 26, 0.06)" : "rgba(242, 239, 232, 0.06)",
      colorFillTertiary: mode === "light" ? "rgba(26, 26, 26, 0.04)" : "rgba(242, 239, 232, 0.04)",
      borderRadius: t.radius.md,
      borderRadiusLG: t.radius.lg,
      borderRadiusSM: t.radius.sm,
      fontFamily: t.font.family,
      fontSize: t.font.size,
      lineHeight: t.font.lineHeight,
      boxShadow: t.shadow.raised,
      boxShadowSecondary: t.shadow.raised,
      controlOutline: "none",
      lineWidth: t.borderWidth.medium,
      lineWidthBold: t.borderWidth.thick,
    },
    components: {
      Layout: { siderBg: surface, headerBg: surface, bodyBg: paper, triggerBg: surface },
      Menu: {
        itemBg: "transparent",
        itemColor: ink,
        itemHoverColor: ink,
        itemHoverBg: mode === "light" ? "rgba(26, 26, 26, 0.05)" : "rgba(242, 239, 232, 0.06)",
        itemSelectedColor: ink,
        itemSelectedBg: "transparent",
        itemActiveBg: mode === "light" ? "rgba(26, 26, 26, 0.08)" : "rgba(242, 239, 232, 0.1)",
        iconSize: 16,
        itemBorderRadius: t.radius.md,
      },
      Button: {
        primaryShadow: t.shadow.raised,
        defaultShadow: t.shadow.raised,
        defaultBorderColor: ink,
        defaultColor: ink,
        defaultBg: surface,
        primaryColor: surface,
        primaryBg: ink,
        borderRadius: t.radius.md,
        fontWeight: 400,
        controlHeight: 40,
      },
      Input: {
        colorBgContainer: inset,
        activeBorderColor: ink,
        hoverBorderColor: ink,
        borderRadius: t.radius.md,
        controlHeight: 40,
      },
      Select: { colorBgContainer: inset, optionSelectedBg: mode === "light" ? "rgba(26, 26, 26, 0.08)" : "rgba(242, 239, 232, 0.1)" },
      Card: { colorBgContainer: surface, borderRadiusLG: t.radius.lg },
      Table: {
        headerBg: inset,
        headerColor: ink,
        borderColor: mode === "light" ? "rgba(26, 26, 26, 0.25)" : "rgba(242, 239, 232, 0.2)",
        rowHoverBg: mode === "light" ? "rgba(26, 26, 26, 0.04)" : "rgba(242, 239, 232, 0.05)",
      },
      Modal: { contentBg: surface, headerBg: surface, titleColor: ink, borderRadiusLG: t.radius.lg },
      Switch: { colorPrimary: ink, handleBg: surface },
      Tag: { defaultBg: "transparent", defaultColor: ink },
      Typography: { titleMarginBottom: 16, titleMarginTop: 0 },
      Pagination: { itemActiveBg: surface, itemBg: surface },
      Form: { labelColor: ink },
      DatePicker: { colorBgContainer: inset },
      Notification: { colorBgElevated: surface },
      Message: { contentBg: surface },
      Alert: { colorInfoBg: inset, colorSuccessBg: inset, colorWarningBg: inset, colorErrorBg: inset },
      Drawer: { colorBgElevated: surface },
      Upload: { colorFillAlter: inset },
      Tabs: { itemColor: inkMuted, itemSelectedColor: ink, inkBarColor: ink },
      Steps: { colorPrimary: ink },
      Progress: { defaultColor: ink },
      Result: { titleFontSize: 20, subtitleFontSize: 14 },
      Empty: { colorText: inkMuted },
    },
  };
}

/** @deprecated Use toAntdTheme */
export const neoSkeuoAntdTheme = toAntdTheme("light");
