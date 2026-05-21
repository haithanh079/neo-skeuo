import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { afterEach } from "vitest";
import { describe, expect, it, vi } from "vitest";
import type { ReactElement } from "react";
import { NeoProvider } from "./context.js";
import { NeoField } from "./form.js";
import { NeoButton, NeoInput, NeoModal, NeoPopover, NeoPopconfirm, NeoTabs } from "./primitives.js";

function wrap(ui: ReactElement) {
  return render(<NeoProvider theme="light">{ui}</NeoProvider>);
}

describe("@neo-skeuo/react primitives", () => {
  afterEach(() => cleanup());
  it("renders NeoButton with skeuo class", () => {
    wrap(<NeoButton variant="primary">Save</NeoButton>);
    expect(screen.getByRole("button", { name: "Save" })).toHaveClass("neo-btn--primary");
  });

  it("NeoModal closes on Escape", () => {
    const onClose = vi.fn();
    wrap(
      <NeoModal open title="Test" onClose={onClose}>
        Body
      </NeoModal>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("NeoTabs exposes tab roles", () => {
    wrap(<NeoTabs tabs={["A", "B"]} active="A" onChange={() => {}} />);
    expect(screen.getAllByRole("tab")).toHaveLength(2);
  });

  it("NeoPopover toggles content on trigger click", () => {
    wrap(
      <NeoPopover content="Hint">
        <span>Open</span>
      </NeoPopover>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByRole("dialog")).toHaveTextContent("Hint");
  });

  it("NeoPopconfirm closes on Escape", () => {
    const onConfirm = vi.fn();
    wrap(
      <NeoPopconfirm title="Delete?" onConfirm={onConfirm}>
        <span>Delete</span>
      </NeoPopconfirm>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it("NeoField shows error", () => {
    wrap(
      <NeoField label="Email" error="Required" htmlFor="email">
        <NeoInput id="email" />
      </NeoField>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });
});
