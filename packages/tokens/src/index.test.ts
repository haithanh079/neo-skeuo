import { describe, expect, it } from "vitest";
import { getTokens, getSurfaceStyle, resolveThemeMode, toAntdTheme } from "./index.js";

describe("@neo-skeuo/tokens", () => {
  it("getTokens returns light and dark", () => {
    expect(getTokens("light").color.paper).toBe("#f4f0e8");
    expect(getTokens("dark").color.paper).toBe("#1c1b19");
    expect(getTokens("light").color.success).toBe("#2d6a4f");
    expect(getTokens("dark").color.error).toBe("#e76f51");
  });

  it("resolveThemeMode", () => {
    expect(resolveThemeMode("light")).toBe("light");
    expect(resolveThemeMode("dark")).toBe("dark");
    expect(resolveThemeMode("system", false)).toBe("light");
    expect(resolveThemeMode("system", true)).toBe("dark");
  });

  it("getSurfaceStyle raised", () => {
    const s = getSurfaceStyle("raised", "web", "light");
    expect(s.boxShadow).toBeTruthy();
    expect(s.backgroundColor).toBe("#faf7f2");
  });

  it("toAntdTheme", () => {
    expect(toAntdTheme("dark").token.colorPrimary).toBe("#f2efe8");
  });
});
