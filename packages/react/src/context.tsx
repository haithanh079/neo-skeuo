import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  resolveThemeMode,
  watchSystemTheme,
  type NeoResolvedTheme,
  type NeoThemeMode,
} from "@neo-skeuo/tokens";

/** Props for the root theme wrapper. Sets `className` (default `neo-skeuo`) and `data-neo-theme` on the app root. */
export type NeoProviderProps = {
  children: ReactNode;
  /** `light`, `dark`, or `system` (follows prefers-color-scheme). */
  theme?: NeoThemeMode;
  className?: string;
  onThemeChange?: (resolved: NeoResolvedTheme) => void;
};

type NeoContextValue = {
  mode: NeoThemeMode;
  resolved: NeoResolvedTheme;
  setMode: (mode: NeoThemeMode) => void;
};

const NeoContext = createContext<NeoContextValue | null>(null);

/**
 * Required root wrapper for all `@neo-skeuo/react` primitives.
 * Import `@neo-skeuo/web-css/index.css` in your app entry.
 */
export function NeoProvider({ children, theme = "light", className = "neo-skeuo", onThemeChange }: NeoProviderProps) {
  const [mode, setMode] = useState<NeoThemeMode>(theme);
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => setMode(theme), [theme]);

  useEffect(() => {
    if (mode !== "system") return;
    return watchSystemTheme((resolved) => setSystemDark(resolved === "dark"));
  }, [mode]);

  const resolved = useMemo(() => resolveThemeMode(mode, systemDark), [mode, systemDark]);

  useEffect(() => {
    onThemeChange?.(resolved);
  }, [resolved, onThemeChange]);

  const value = useMemo(() => ({ mode, resolved, setMode }), [mode, resolved]);

  return (
    <NeoContext.Provider value={value}>
      <div className={className} data-neo-theme={resolved}>
        {children}
      </div>
    </NeoContext.Provider>
  );
}

/** Returns resolved theme and `setMode`. Throws if used outside `NeoProvider`. */
export function useNeoTheme() {
  const ctx = useContext(NeoContext);
  if (!ctx) throw new Error("useNeoTheme must be used within NeoProvider");
  return ctx;
}
