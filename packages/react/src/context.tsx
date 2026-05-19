import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  resolveThemeMode,
  watchSystemTheme,
  type NeoResolvedTheme,
  type NeoThemeMode,
} from "@neo-skeuo/tokens";

export type NeoProviderProps = {
  children: ReactNode;
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

export function useNeoTheme() {
  const ctx = useContext(NeoContext);
  if (!ctx) throw new Error("useNeoTheme must be used within NeoProvider");
  return ctx;
}
