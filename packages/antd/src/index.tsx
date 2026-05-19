import { useMemo, type ReactNode } from "react";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import { NeoProvider, NeoSketchDefs, useNeoTheme, type NeoProviderProps } from "@neo-skeuo/react";
import { resolveThemeMode, toAntdTheme, type NeoThemeMode } from "@neo-skeuo/tokens";

export type NeoSkeuoAntdProviderProps = Omit<NeoProviderProps, "children"> & {
  children: ReactNode;
  antdTheme?: ThemeConfig;
};

function AntdConfig({ children, antdTheme }: { children: ReactNode; antdTheme?: ThemeConfig }) {
  const { resolved } = useNeoTheme();
  const theme = useMemo(() => {
    const base = toAntdTheme(resolved) as ThemeConfig;
    return antdTheme ? { ...base, ...antdTheme, token: { ...base.token, ...antdTheme.token } } : base;
  }, [resolved, antdTheme]);

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}

export function NeoSkeuoAntdProvider({
  children,
  theme = "light",
  className = "neo-skeuo",
  antdTheme,
  ...rest
}: NeoSkeuoAntdProviderProps) {
  return (
    <NeoProvider theme={theme} className={className} {...rest}>
      <NeoSketchDefs />
      <AntdConfig antdTheme={antdTheme}>{children}</AntdConfig>
    </NeoProvider>
  );
}

export { toAntdTheme, resolveThemeMode, type NeoThemeMode };
export { neoSkeuoAntdTheme } from "@neo-skeuo/tokens";
