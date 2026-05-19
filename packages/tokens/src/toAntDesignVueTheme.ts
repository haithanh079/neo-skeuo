import { getTokens } from "./palettes.js";
import type { NeoResolvedTheme } from "./types.js";

/** Ant Design Vue token map (compatible with ConfigProvider theme prop). */
export function toAntDesignVueTheme(mode: NeoResolvedTheme) {
  const t = getTokens(mode);
  return {
    token: {
      colorPrimary: t.color.ink,
      colorText: t.color.ink,
      colorTextSecondary: t.color.inkMuted,
      colorBgLayout: t.color.paper,
      colorBgContainer: t.color.surface,
      colorBorder: t.color.ink,
      borderRadius: t.radius.md,
      fontFamily: t.font.family,
      fontSize: t.font.size,
      boxShadow: t.shadow.raised,
    },
  };
}
