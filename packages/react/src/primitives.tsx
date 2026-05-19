import {
  createElement,
  forwardRef,
  useCallback,
  useId,
  useRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import { getSurfaceStyle, type NeoButtonVariant, type NeoElevation } from "@neo-skeuo/tokens";
import { useEscapeKey, useFocusTrap } from "./a11y.js";
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
  { className, ...props },
  ref,
) {
  return <input ref={ref} type="checkbox" className={cn("neo-checkbox", className)} {...props} />;
});

export const NeoRadio = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function NeoRadio(
  { className, ...props },
  ref,
) {
  return <input ref={ref} type="radio" className={cn("neo-radio", className)} {...props} />;
});

export const NeoSwitch = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function NeoSwitch(
  { className, ...props },
  ref,
) {
  return <input ref={ref} type="checkbox" role="switch" className={cn("neo-switch", className)} {...props} />;
});

export const NeoSlider = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function NeoSlider(
  { className, ...props },
  ref,
) {
  return <input ref={ref} type="range" className={cn("neo-slider", className)} {...props} />;
});

export type NeoCardProps = HTMLAttributes<HTMLDivElement>;
export const NeoCard = forwardRef<HTMLDivElement, NeoCardProps>(function NeoCard({ className, ...rest }, ref) {
  return <div ref={ref} className={cn("neo-card", className)} {...rest} />;
});

export const NeoBadge = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(function NeoBadge({ className, ...rest }, ref) {
  return <span ref={ref} className={cn("neo-tag", className)} {...rest} />;
});

export const NeoTag = NeoBadge;

export type NeoModalProps = {
  open?: boolean;
  title?: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
  labelledById?: string;
};

export function NeoModal({ open, title, children, onClose, labelledById }: NeoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const resolvedTitleId = labelledById ?? titleId;

  useFocusTrap(dialogRef, open);
  useEscapeKey(() => onClose?.(), open && !!onClose);

  const onBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose?.();
    },
    [onClose],
  );

  if (!open) return null;

  return (
    <div className="neo-modal-backdrop neo-animate-in" onClick={onBackdrop} onKeyDown={undefined}>
      <NeoSurface
        ref={dialogRef}
        elevation="raised"
        className="neo-modal"
        role="dialog"
        aria-modal
        aria-labelledby={title ? resolvedTitleId : undefined}
      >
        {title ? (
          <h2 id={resolvedTitleId} className="neo-modal__title">
            {title}
          </h2>
        ) : null}
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
    <NeoSurface elevation="raised" className="neo-toast neo-animate-in" role="status">
      <span>{message}</span>
      {onClose ? (
        <NeoButton variant="ghost" aria-label="Dismiss" onClick={onClose}>
          ×
        </NeoButton>
      ) : null}
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
  return (
    <span className={cn("neo-spinner", className)} aria-busy aria-label="Loading">
      ◌
    </span>
  );
}

export const NeoSkeleton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function NeoSkeleton(
  { className, ...rest },
  ref,
) {
  return <div ref={ref} className={cn("neo-skeleton", className)} {...rest} />;
});

export function NeoEmpty({ description, action }: { description?: ReactNode; action?: ReactNode }) {
  return (
    <NeoSurface elevation="flat" className="neo-empty">
      <p>{description ?? "No data"}</p>
      {action}
    </NeoSurface>
  );
}

export type NeoTabItem = { key: string; label: string; panel?: ReactNode };

export function NeoTabs({
  tabs,
  active,
  onChange,
  items,
}: {
  tabs?: string[];
  active: string;
  onChange: (t: string) => void;
  items?: NeoTabItem[];
}) {
  const tabItems: NeoTabItem[] =
    items ??
    (tabs ?? []).map((t) => ({
      key: t,
      label: t,
    }));
  const activeItem = tabItems.find((t) => t.key === active) ?? tabItems[0];

  return (
    <div className="neo-tabs">
      <div className="neo-tabs__list" role="tablist">
        {tabItems.map((t) => (
          <NeoButton
            key={t.key}
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={active === t.key}
            aria-controls={`panel-${t.key}`}
            className="neo-tabs__tab"
            variant={active === t.key ? "primary" : "default"}
            onClick={() => onChange(t.key)}
          >
            {t.label}
          </NeoButton>
        ))}
      </div>
      {tabItems.map((t) => (
        <div
          key={t.key}
          id={`panel-${t.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${t.key}`}
          className="neo-tabs__panel neo-inset"
          hidden={active !== t.key}
        >
          {active === t.key ? (t.panel ?? activeItem?.panel ?? null) : null}
        </div>
      ))}
    </div>
  );
}

export function NeoBreadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="neo-breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 ? <span className="neo-breadcrumb__sep"> &gt; </span> : null}
          {item.href ? <a href={item.href}>{item.label}</a> : item.label}
        </span>
      ))}
    </nav>
  );
}

export function NeoPagination({ page, total, onChange }: { page: number; total: number; onChange: (p: number) => void }) {
  return (
    <div className="neo-pagination" role="navigation" aria-label="Pagination">
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <NeoButton key={p} variant={p === page ? "primary" : "default"} onClick={() => onChange(p)} aria-current={p === page ? "page" : undefined}>
          {p}
        </NeoButton>
      ))}
    </div>
  );
}

export function NeoSteps({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="neo-steps">
      {steps.map((s, i) => (
        <li key={s} className={cn("neo-steps__item", i > current && "neo-steps__item--inactive")}>
          <NeoBadge>{i + 1}</NeoBadge> {s}
        </li>
      ))}
    </ol>
  );
}

export function NeoTooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="neo-tooltip">
      {children}
      <span className="neo-tooltip__bubble" role="tooltip">
        {label}
      </span>
    </span>
  );
}

export function NeoTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <table className="neo-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function NeoList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="neo-list">
      {items.map((item, i) => (
        <li key={i} className="neo-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function NeoAvatar({ label, src, alt }: { label: string; src?: string; alt?: string }) {
  return (
    <span className="neo-avatar" aria-label={alt ?? label}>
      {src ? <img src={src} alt={alt ?? label} /> : label.slice(0, 1).toUpperCase()}
    </span>
  );
}

export const NeoDivider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(function NeoDivider(
  { className, ...props },
  ref,
) {
  return <hr ref={ref} className={cn("neo-divider", className)} {...props} />;
});

void createElement;
