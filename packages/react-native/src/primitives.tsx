import type { ReactNode } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  type PressableProps,
  type TextInputProps,
  type ViewProps,
} from "react-native";
import { getSurfaceStyle, type NeoButtonVariant, type NeoElevation } from "@neo-skeuo/tokens";
import { useNeoTheme } from "./context.js";

function useResolved() {
  return useNeoTheme().resolved;
}

export function NeoSurface({ elevation = "raised", style, children, ...rest }: ViewProps & { elevation?: NeoElevation }) {
  const resolved = useResolved();
  const s = getSurfaceStyle(elevation, "native", resolved);
  return (
    <View style={[s as object, style]} {...rest}>
      {children}
    </View>
  );
}

export function NeoButton({
  variant = "default",
  children,
  style,
  ...rest
}: PressableProps & { variant?: NeoButtonVariant; children?: ReactNode }) {
  const resolved = useResolved();
  const base = getSurfaceStyle(variant === "primary" ? "raised" : "flat", "native", resolved);
  return (
    <Pressable style={[base as object, { paddingHorizontal: 16, paddingVertical: 10, alignItems: "center" }, style]} {...rest}>
      <Text style={{ color: variant === "primary" ? (resolved === "dark" ? "#1a1a1a" : "#faf7f2") : undefined }}>{children}</Text>
    </Pressable>
  );
}

export function NeoInput(props: TextInputProps) {
  const resolved = useResolved();
  const s = getSurfaceStyle("inset", "native", resolved);
  return <TextInput style={[s as object, { padding: 10 }, props.style]} placeholderTextColor={resolved === "dark" ? "#6b6764" : "#a8a8a8"} {...props} />;
}

export const NeoCard = NeoSurface;
export const NeoTextarea = NeoInput;
export const NeoInputNumber = NeoInput;
export function NeoSelect({ children, ...rest }: ViewProps & { children?: ReactNode }) {
  return <NeoSurface elevation="inset" {...rest}>{children}</NeoSurface>;
}
export function NeoCheckbox(props: ViewProps) { return <NeoSurface elevation="inset" {...props} />; }
export function NeoRadio(props: ViewProps) { return <NeoSurface elevation="inset" {...props} />; }
export function NeoSwitch(props: ViewProps) { return <NeoSurface elevation="pressed" {...props} />; }
export function NeoSlider(props: ViewProps) { return <NeoSurface elevation="inset" {...props} />; }
export function NeoBadge({ children }: { children?: ReactNode }) {
  return (
    <NeoSurface elevation="flat" style={{ borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2 }}>
      <Text>{children}</Text>
    </NeoSurface>
  );
}
export const NeoTag = NeoBadge;
export function NeoModal({ visible, children }: { visible?: boolean; children?: ReactNode }) {
  if (!visible) return null;
  return (
    <View style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", padding: 24 }}>
      <NeoSurface elevation="raised" style={{ padding: 16 }}>{children}</NeoSurface>
    </View>
  );
}
export function NeoAlert({ children }: { children?: ReactNode }) {
  return <NeoSurface elevation="inset" style={{ padding: 12 }}>{children}</NeoSurface>;
}
export function NeoToast({ message }: { message: string }) {
  return (
    <NeoSurface elevation="raised" style={{ position: "absolute", bottom: 24, right: 24, padding: 12 }}>
      <Text>{message}</Text>
    </NeoSurface>
  );
}
export function NeoProgress() { return <NeoSurface elevation="inset" style={{ height: 8, width: "100%" }} />; }
export function NeoSpinner() { return <Text>◌</Text>; }
export function NeoSkeleton() { return <NeoSurface elevation="inset" style={{ height: 12, marginBottom: 8 }} />; }
export function NeoEmpty({ description }: { description?: string }) {
  return (
    <NeoSurface elevation="flat" style={{ padding: 32, alignItems: "center" }}>
      <Text>{description ?? "No data"}</Text>
    </NeoSurface>
  );
}
export function NeoTabs() { return null; }
export function NeoBreadcrumb() { return null; }
export function NeoPagination() { return null; }
export function NeoSteps() { return null; }
export function NeoTooltip({ children }: { label?: string; children?: ReactNode }) { return <>{children}</>; }
export function NeoTable() { return null; }
export function NeoList({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={{ borderBottomWidth: 1, borderColor: "#ccc", paddingVertical: 8 }}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}
export function NeoAvatar({ label }: { label: string }) {
  return (
    <View style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, alignItems: "center", justifyContent: "center" }}>
      <Text>{label[0]}</Text>
    </View>
  );
}
export function NeoDivider() {
  return <View style={{ height: 1, backgroundColor: "#999", marginVertical: 16 }} />;
}
