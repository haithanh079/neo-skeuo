export type NeoThemeMode = "light" | "dark" | "system";
export type NeoResolvedTheme = "light" | "dark";
export type NeoElevation = "flat" | "raised" | "inset" | "pressed";
export type NeoPlatform = "web" | "native";
export type NeoButtonVariant = "primary" | "default" | "ghost" | "danger";

export type NeoColorTokens = {
  paper: string;
  surface: string;
  inset: string;
  ink: string;
  inkMuted: string;
  inkFaint: string;
  white: string;
  success: string;
  warning: string;
  error: string;
  info: string;
};

export type NeoTokenSet = {
  mode: NeoResolvedTheme;
  color: NeoColorTokens;
  radius: { sm: number; md: number; lg: number; pill: number };
  borderWidth: { thin: number; medium: number; thick: number };
  space: { xs: number; sm: number; md: number; lg: number; xl: number };
  font: { family: string; size: number; lineHeight: number };
  shadow: { raised: string; raisedLg: string; inset: string };
  hatch: string;
};
