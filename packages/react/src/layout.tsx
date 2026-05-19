import { forwardRef, type HTMLAttributes } from "react";

function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export type NeoStackProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  gap?: number | string;
};

export const NeoStack = forwardRef<HTMLDivElement, NeoStackProps>(function NeoStack(
  { direction = "column", gap, className, style, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn("neo-stack", direction === "row" && "neo-stack--row", className)}
      style={{ gap, ...style }}
      {...rest}
    />
  );
});

export type NeoGridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: number | string;
};

export const NeoGrid = forwardRef<HTMLDivElement, NeoGridProps>(function NeoGrid(
  { columns = "repeat(auto-fill, minmax(200px, 1fr))", className, style, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn("neo-grid", className)}
      style={{ gridTemplateColumns: typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns, ...style }}
      {...rest}
    />
  );
});

export const NeoContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function NeoContainer(
  { className, ...rest },
  ref,
) {
  return <div ref={ref} className={cn("neo-container", className)} {...rest} />;
});
