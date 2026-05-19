import type { NeoResolvedTheme, NeoThemeMode } from "./types.js";

export function resolveThemeMode(
  mode: NeoThemeMode,
  prefersDark: boolean = getSystemPrefersDark(),
): NeoResolvedTheme {
  if (mode === "system") return prefersDark ? "dark" : "light";
  return mode;
}

export function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function watchSystemTheme(onChange: (resolved: NeoResolvedTheme) => void): () => void {
  if (typeof window === "undefined" || !window.matchMedia) return () => undefined;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => onChange(mq.matches ? "dark" : "light");
  mq.addEventListener("change", handler);
  return () => mq.removeEventListener("change", handler);
}
