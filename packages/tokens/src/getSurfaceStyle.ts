import { getTokens } from "./palettes.js";
import type { NeoElevation, NeoPlatform, NeoResolvedTheme } from "./types.js";

type CssSurfaceStyle = Record<string, string | number>;
type NativeSurfaceStyle = Record<string, string | number>;

export function getSurfaceStyle(
  elevation: NeoElevation,
  platform: "web",
  mode: NeoResolvedTheme,
): CssSurfaceStyle;
export function getSurfaceStyle(
  elevation: NeoElevation,
  platform: "native",
  mode: NeoResolvedTheme,
): NativeSurfaceStyle;
export function getSurfaceStyle(
  elevation: NeoElevation,
  platform: NeoPlatform,
  mode: NeoResolvedTheme,
): CssSurfaceStyle | NativeSurfaceStyle {
  const t = getTokens(mode);
  const border = `${t.borderWidth.medium}px solid ${t.color.ink}`;

  const base =
    platform === "web"
      ? { borderRadius: t.radius.lg, color: t.color.ink }
      : { borderRadius: t.radius.lg, color: t.color.ink };

  switch (elevation) {
    case "flat":
      return { ...base, backgroundColor: t.color.surface, border: `${t.borderWidth.thin}px solid ${t.color.ink}` };
    case "raised":
      return {
        ...base,
        backgroundColor: t.color.surface,
        border,
        boxShadow: t.shadow.raised,
      };
    case "inset":
      return {
        ...base,
        backgroundColor: t.color.inset,
        border: `${t.borderWidth.thin}px solid ${t.color.ink}`,
        boxShadow: t.shadow.inset,
      };
    case "pressed":
      return {
        ...base,
        backgroundColor: t.color.inset,
        border,
        boxShadow: t.shadow.inset,
        ...(platform === "web" ? { backgroundImage: t.hatch } : {}),
      };
    default:
      return base;
  }
}

export function getShadow(kind: "raised" | "raisedLg" | "inset", mode: NeoResolvedTheme): string {
  const t = getTokens(mode);
  if (kind === "raisedLg") return t.shadow.raisedLg;
  if (kind === "inset") return t.shadow.inset;
  return t.shadow.raised;
}
