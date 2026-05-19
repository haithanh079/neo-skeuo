import { App as AntdApp } from "antd";
import type { ReactNode } from "react";
import { NeoSkeuoAntdProvider, type NeoSkeuoAntdProviderProps } from "@neo-skeuo/antd";

export type NeoRefineRootProps = NeoSkeuoAntdProviderProps;

export function NeoRefineRoot({ children, ...props }: NeoRefineRootProps) {
  return (
    <NeoSkeuoAntdProvider {...props}>
      <AntdApp>{children}</AntdApp>
    </NeoSkeuoAntdProvider>
  );
}

export type NeoAdminLayoutProps = {
  logo?: ReactNode;
  headerTitle?: ReactNode;
  headerExtra?: ReactNode;
  sider?: ReactNode;
  children?: ReactNode;
};

/** Optional layout slots — use with your own Ant Layout + Menu. */
export function NeoAdminLayout({ logo, headerTitle, headerExtra, sider, children }: NeoAdminLayoutProps) {
  return (
    <div className="neo-admin-layout" style={{ display: "flex", minHeight: "100vh" }}>
      {sider ? <aside className="neo-admin-sider admin-sider">{logo}{sider}</aside> : null}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header className="admin-header neo-admin-header" style={{ display: "flex", justifyContent: "space-between", padding: "0 24px", alignItems: "center" }}>
          <span>{headerTitle}</span>
          {headerExtra}
        </header>
        <main className="admin-content neo-admin-content" style={{ flex: 1, margin: 24, padding: 24 }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export { NeoSkeuoAntdProvider } from "@neo-skeuo/antd";
