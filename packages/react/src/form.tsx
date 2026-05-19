import { type ReactNode } from "react";

function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export type NeoFieldProps = {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  htmlFor?: string;
  children?: ReactNode;
  className?: string;
};

export function NeoField({ label, hint, error, required, htmlFor, children, className }: NeoFieldProps) {
  return (
    <div className={cn("neo-field", error ? "neo-field--error" : undefined, className)}>
      {label ? (
        <label className="neo-field__label" htmlFor={htmlFor}>
          {label}
          {required ? " *" : null}
        </label>
      ) : null}
      {children}
      {hint && !error ? <span className="neo-field__hint">{hint}</span> : null}
      {error ? (
        <span className="neo-field__error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
