import {
  createElement,
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import { getSurfaceStyle, type NeoButtonVariant, type NeoElevation } from "@neo-skeuo/tokens";
import { useNeoTheme } from "./context.js";

function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function useResolved() {
  return useNeoTheme().resolved;
}

export type NeoSurfaceProps = HTMLAttributes<HTMLDivElement> & { elevation?: NeoElevation };

export const NeoSurface = forwardRef<HTMLDivElement, NeoSurfaceProps>(function NeoSurface(
  { elevation = "raised", className, style, ...rest },
  ref,
) {
  const resolved = useResolved();
  const surfaceStyle = getSurfaceStyle(elevation, "web", resolved);
  return (
    <div
      ref={ref}
      className={cn(elevation === "raised" && "neo-raised", elevation === "inset" && "neo-inset", elevation === "pressed" && "neo-pressed", className)}
      style={{ ...surfaceStyle, ...style }}
      {...rest}
    />
  );
});

export type NeoButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: NeoButtonVariant;
  loading?: boolean;
};

export const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(function NeoButton(
  { variant = "default", className, loading, disabled, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      className={cn("neo-btn", variant === "primary" && "neo-btn--primary", variant === "ghost" && "neo-btn--ghost", className)}
      {...rest}
    >
      {loading ? "…" : children}
    </button>
  );
});

export type NeoInputProps = InputHTMLAttributes<HTMLInputElement>;
export const NeoInput = forwardRef<HTMLInputElement, NeoInputProps>(function NeoInput({ className, ...rest }, ref) {
  return <input ref={ref} className={cn("neo-input", className)} {...rest} />;
});

export type NeoTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export const NeoTextarea = forwardRef<HTMLTextAreaElement, NeoTextareaProps>(function NeoTextarea(
  { className, ...rest },
  ref,
) {
  return <textarea ref={ref} className={cn("neo-input", className)} {...rest} />;
});

export const NeoInputNumber = NeoInput;

export type NeoSelectProps = HTMLAttributes<HTMLSelectElement>;
export const NeoSelect = forwardRef<HTMLSelectElement, NeoSelectProps>(function NeoSelect({ className, children, ...rest }, ref) {
  return (
    <select ref={ref} className={cn("neo-input", className)} {...rest}>
      {children}
    </select>
  );
});

export const NeoCheckbox = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function NeoCheckbox(
  props,
  ref,
) {
  return <input ref={ref} type="checkbox" {...props} />;
});

export const NeoRadio = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function NeoRadio(props, ref) {
  return <input ref={ref} type="radio" {...props} />;
});

export const NeoSwitch = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function NeoSwitch(props, ref) {
  return <input ref={ref} type="checkbox" role="switch" {...props} />;
});

export const NeoSlider = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function NeoSlider(props, ref) {
  return <input ref={ref} type="range" className="neo-input" {...props} />;
});

export type NeoCardProps = HTMLAttributes<HTMLDivElement>;
export const NeoCard = forwardRef<HTMLDivElement, NeoCardProps>(function NeoCard({ className, ...rest }, ref) {
  return <div ref={ref} className={cn("neo-card", className)} {...rest} />;
});

export const NeoBadge = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(function NeoBadge({ className, ...rest }, ref) {
  return <span ref={ref} className={cn("neo-tag", className)} {...rest} />;
});

export const NeoTag = NeoBadge;

export type NeoModalProps = { open?: boolean; title?: ReactNode; children?: ReactNode; onClose?: () => void };
export function NeoModal({ open, title, children, onClose }: NeoModalProps) {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal style={{ position: "fixed", inset: 0, zIndex: 1000, display: "grid", placeItems: "center", background: "rgba(0,0,0,0.35)" }}>
      <NeoSurface elevation="raised" style={{ minWidth: 320, maxWidth: "90vw", padding: 24, filter: "url(#neo-sketch-strong)" }}>
        {title ? <h2 style={{ marginBottom: 16 }}>{title}</h2> : null}
        {children}
        {onClose ? (
          <div style={{ marginTop: 16, textAlign: "right" }}>
            <NeoButton onClick={onClose}>Close</NeoButton>
          </div>
        ) : null}
      </NeoSurface>
    </div>
  );
}

export type NeoAlertProps = HTMLAttributes<HTMLDivElement> & { variant?: "info" | "success" | "warning" | "error" };
export const NeoAlert = forwardRef<HTMLDivElement, NeoAlertProps>(function NeoAlert({ className, variant = "info", ...rest }, ref) {
  return <NeoSurface ref={ref} elevation="inset" className={cn(`neo-alert neo-alert--${variant}`, className)} role="alert" {...rest} />;
});

export function NeoToast({ message, onClose }: { message: string; onClose?: () => void }) {
  return (
    <NeoSurface elevation="raised" className="neo-toast" style={{ position: "fixed", bottom: 24, right: 24, padding: 12, display: "flex", gap: 8, alignItems: "center" }}>
      <span>{message}</span>
      {onClose ? <NeoButton variant="ghost" onClick={onClose}>×</NeoButton> : null}
    </NeoSurface>
  );
}

export const NeoProgress = forwardRef<HTMLProgressElement, HTMLAttributes<HTMLProgressElement>>(function NeoProgress(
  { className, ...rest },
  ref,
) {
  return <progress ref={ref as never} className={cn("neo-input", className)} {...rest} />;
});

export function NeoSpinner({ className }: { className?: string }) {
  return <span className={cn("neo-spinner", className)} aria-busy>◌</span>;
}

export const NeoSkeleton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function NeoSkeleton({ className, ...rest }, ref) {
  return <div ref={ref} className={cn("neo-skeleton", className)} style={{ height: 12, marginBottom: 8, background: "var(--neo-inset)" }} {...rest} />;
});

export function NeoEmpty({ description, action }: { description?: ReactNode; action?: ReactNode }) {
  return (
    <NeoSurface elevation="flat" style={{ textAlign: "center", padding: 32 }}>
      <p>{description ?? "No data"}</p>
      {action}
    </NeoSurface>
  );
}

export function NeoTabs({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t: string) => void }) {
  return (
    <div className="neo-tabs" role="tablist">
      {tabs.map((t) => (
        <NeoButton key={t} variant={active === t ? "primary" : "default"} onClick={() => onChange(t)} style={{ marginRight: 4 }}>
          {t}
        </NeoButton>
      ))}
    </div>
  );
}

export function NeoBreadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 ? " > " : ""}
          {item.href ? <a href={item.href}>{item.label}</a> : item.label}
        </span>
      ))}
    </nav>
  );
}

export function NeoPagination({ page, total, onChange }: { page: number; total: number; onChange: (p: number) => void }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <NeoButton key={p} variant={p === page ? "primary" : "default"} onClick={() => onChange(p)}>
          {p}
        </NeoButton>
      ))}
    </div>
  );
}

export function NeoSteps({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol style={{ display: "flex", gap: 8, listStyle: "none", padding: 0 }}>
      {steps.map((s, i) => (
        <li key={s} style={{ opacity: i <= current ? 1 : 0.5 }}>
          <NeoBadge>{i + 1}</NeoBadge> {s}
        </li>
      ))}
    </ol>
  );
}

export function NeoTooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span title={label} className="neo-tooltip">
      {children}
    </span>
  );
}

export function NeoTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <table className="neo-table" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c} style={{ borderBottom: "2px solid var(--neo-ink)", padding: 8 }}>
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci} style={{ borderBottom: "1px solid color-mix(in srgb, var(--neo-ink) 15%, transparent)", padding: 8 }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function NeoList({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ borderBottom: "1px solid color-mix(in srgb, var(--neo-ink) 15%, transparent)", padding: "8px 0" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function NeoAvatar({ label }: { label: string }) {
  return (
    <span style={{ display: "inline-grid", placeItems: "center", width: 40, height: 40, borderRadius: "50%", border: "2px solid var(--neo-ink)" }}>
      {label.slice(0, 1).toUpperCase()}
    </span>
  );
}

export const NeoDivider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(function NeoDivider(props, ref) {
  return <hr ref={ref} style={{ border: "none", borderTop: "1px solid var(--neo-ink-muted)", margin: "16px 0" }} {...props} />;
});

void createElement;
