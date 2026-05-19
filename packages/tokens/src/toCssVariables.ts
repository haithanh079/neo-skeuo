import { getTokens } from "./palettes.js";
import type { NeoResolvedTheme } from "./types.js";

export function toCssVariables(mode: NeoResolvedTheme, scope = ".neo-skeuo"): string {
  const t = getTokens(mode);
  const suffix = mode === "dark" ? '[data-neo-theme="dark"]' : '[data-neo-theme="light"]';
  const selector = `${scope}${suffix}, ${scope}:not([data-neo-theme])${mode === "light" ? "" : ""}`;

  const lines = [
    `${scope}${suffix} {`,
    `  --neo-paper: ${t.color.paper};`,
    `  --neo-surface: ${t.color.surface};`,
    `  --neo-inset: ${t.color.inset};`,
    `  --neo-ink: ${t.color.ink};`,
    `  --neo-ink-muted: ${t.color.inkMuted};`,
    `  --neo-ink-faint: ${t.color.inkFaint};`,
    `  --neo-white: ${t.color.white};`,
    `  --neo-border-thin: ${t.borderWidth.thin}px solid var(--neo-ink);`,
    `  --neo-border-medium: ${t.borderWidth.medium}px solid var(--neo-ink);`,
    `  --neo-border-thick: ${t.borderWidth.thick}px solid var(--neo-ink);`,
    `  --neo-radius-sm: ${t.radius.sm}px;`,
    `  --neo-radius-md: ${t.radius.md}px;`,
    `  --neo-radius-lg: ${t.radius.lg}px;`,
    `  --neo-radius-pill: ${t.radius.pill}px;`,
    `  --neo-shadow-raised: ${t.shadow.raised};`,
    `  --neo-shadow-raised-lg: ${t.shadow.raisedLg};`,
    `  --neo-shadow-inset: ${t.shadow.inset};`,
    `  --neo-hatch: ${t.hatch};`,
    `  --neo-font: ${t.font.family};`,
    `  --neo-font-size: ${t.font.size}px;`,
    `  --neo-line-height: ${t.font.lineHeight};`,
    `  --neo-space-xs: ${t.space.xs}px;`,
    `  --neo-space-sm: ${t.space.sm}px;`,
    `  --neo-space-md: ${t.space.md}px;`,
    `  --neo-space-lg: ${t.space.lg}px;`,
    `  --neo-space-xl: ${t.space.xl}px;`,
    `  color-scheme: ${mode};`,
    `}`,
  ];

  if (mode === "light") {
    lines.push(
      `${scope}:not([data-neo-theme]) {`,
      `  --neo-paper: ${t.color.paper};`,
      `  --neo-surface: ${t.color.surface};`,
      `  --neo-inset: ${t.color.inset};`,
      `  --neo-ink: ${t.color.ink};`,
      `  --neo-ink-muted: ${t.color.inkMuted};`,
      `  --neo-ink-faint: ${t.color.inkFaint};`,
      `  color-scheme: light;`,
      `}`,
    );
  }

  void selector;
  return lines.join("\n");
}
