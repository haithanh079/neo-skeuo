import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { ReactElement } from "react";
import { NeoProvider } from "./context.js";
import { NeoField } from "./form.js";
import { NeoButton, NeoInput, NeoModal, NeoTabs } from "./primitives.js";

function wrap(ui: ReactElement) {
  return render(<NeoProvider theme="light">{ui}</NeoProvider>);
}

describe("@neo-skeuo/react primitives", () => {
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

  it("NeoField shows error", () => {
    wrap(
      <NeoField label="Email" error="Required" htmlFor="email">
        <NeoInput id="email" />
      </NeoField>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });
});
