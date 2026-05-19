import type { NeoResolvedTheme, NeoTokenSet } from "./types.js";

const light: NeoTokenSet = {
  mode: "light",
  color: {
    paper: "#f4f0e8",
    surface: "#faf7f2",
    inset: "#f0ebe3",
    ink: "#1a1a1a",
    inkMuted: "#6b6b6b",
    inkFaint: "#a8a8a8",
    white: "#ffffff",
    success: "#2d6a4f",
    warning: "#b08900",
    error: "#9b2226",
    info: "#1d4e89",
  },
  radius: { sm: 4, md: 8, lg: 12, pill: 20 },
  borderWidth: { thin: 1, medium: 2, thick: 4 },
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  font: {
    family: '"Patrick Hand", "Segoe UI", system-ui, sans-serif',
    size: 16,
    lineHeight: 1.45,
  },
  shadow: {
    raised: "3px 4px 0 rgba(26, 26, 26, 0.12), 6px 8px 16px rgba(26, 26, 26, 0.08)",
    raisedLg: "4px 5px 0 rgba(26, 26, 26, 0.14), 10px 14px 28px rgba(26, 26, 26, 0.1)",
    inset: "inset 0 2px 4px rgba(26, 26, 26, 0.1), inset 0 1px 2px rgba(26, 26, 26, 0.06)",
  },
  hatch:
    "repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(26, 26, 26, 0.07) 3px, rgba(26, 26, 26, 0.07) 4px)",
};

const dark: NeoTokenSet = {
  mode: "dark",
  color: {
    paper: "#1c1b19",
    surface: "#262522",
    inset: "#141312",
    ink: "#f2efe8",
    inkMuted: "#a8a4a0",
    inkFaint: "#6b6764",
    white: "#faf7f2",
    success: "#52b788",
    warning: "#e9c46a",
    error: "#e76f51",
    info: "#90e0ef",
  },
  radius: { sm: 4, md: 8, lg: 12, pill: 20 },
  borderWidth: { thin: 1, medium: 2, thick: 4 },
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  font: {
    family: '"Patrick Hand", "Segoe UI", system-ui, sans-serif',
    size: 16,
    lineHeight: 1.45,
  },
  shadow: {
    raised: "3px 4px 0 rgba(0, 0, 0, 0.35), 6px 8px 16px rgba(0, 0, 0, 0.25)",
    raisedLg: "4px 5px 0 rgba(0, 0, 0, 0.4), 10px 14px 28px rgba(0, 0, 0, 0.3)",
    inset: "inset 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(0, 0, 0, 0.2)",
  },
  hatch:
    "repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(242, 239, 232, 0.08) 3px, rgba(242, 239, 232, 0.08) 4px)",
};

export function getTokens(mode: NeoResolvedTheme): NeoTokenSet {
  return mode === "dark" ? { ...dark } : { ...light };
}

export const neoTokensLight = light;
export const neoTokensDark = dark;
