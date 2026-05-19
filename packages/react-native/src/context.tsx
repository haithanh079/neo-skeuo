import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { resolveThemeMode, type NeoResolvedTheme, type NeoThemeMode } from "@neo-skeuo/tokens";

type NeoContextValue = {
  resolved: NeoResolvedTheme;
  mode: NeoThemeMode;
  setMode: (m: NeoThemeMode) => void;
};

const NeoContext = createContext<NeoContextValue | null>(null);

export function NeoProvider({
  children,
  theme = "light",
}: {
  children: ReactNode;
  theme?: NeoThemeMode;
}) {
  const [mode, setMode] = useState<NeoThemeMode>(theme);
  const resolved = useMemo(() => resolveThemeMode(mode, false), [mode]);
  const value = useMemo(() => ({ resolved, mode, setMode }), [resolved, mode]);
  return <NeoContext.Provider value={value}>{children}</NeoContext.Provider>;
}

export function useNeoTheme() {
  const ctx = useContext(NeoContext);
  if (!ctx) throw new Error("useNeoTheme requires NeoProvider");
  return ctx;
}
