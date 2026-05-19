import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  NeoAlert,
  NeoButton,
  NeoEmpty,
  NeoModal,
  NeoProgress,
  NeoSkeleton,
  NeoSpinner,
  NeoToast,
} from "@neo-skeuo/react";
import { primitiveMeta } from "./decorators";

const meta: Meta = {
  ...primitiveMeta,
  title: "Neo/Primitives/Feedback",
};
export default meta;

export const Alert: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 420 }}>
      <NeoAlert variant="info">Info message</NeoAlert>
      <NeoAlert variant="success">Success message</NeoAlert>
      <NeoAlert variant="warning">Warning message</NeoAlert>
      <NeoAlert variant="error">Error message</NeoAlert>
    </div>
  ),
};

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
  <>
      <NeoButton variant="primary" onClick={() => setOpen(true)}>
        Open modal
      </NeoButton>
      <NeoModal open={open} title="Confirm save" onClose={() => setOpen(false)}>
        <p>Your changes will be saved to the library.</p>
      </NeoModal>
    </>
  );
}

export const Modal: StoryObj = {
  render: () => <ModalDemo />,
};

function ToastDemo() {
  const [show, setShow] = useState(true);
  return (
    <>
      <NeoButton onClick={() => setShow(true)}>Show toast</NeoButton>
      {show ? <NeoToast message="Saved successfully" onClose={() => setShow(false)} /> : null}
    </>
  );
}

export const Toast: StoryObj = {
  render: () => <ToastDemo />,
};

export const Progress: StoryObj = {
  render: () => <NeoProgress value={0.6} max={1} style={{ width: 280 }} />,
};

export const Spinner: StoryObj = {
  render: () => <NeoSpinner />,
};

export const Skeleton: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <NeoSkeleton style={{ width: "80%" }} />
      <NeoSkeleton style={{ width: "60%" }} />
      <NeoSkeleton style={{ width: "90%" }} />
    </div>
  ),
};

export const Empty: StoryObj = {
  render: () => (
    <NeoEmpty
      description="No books yet"
      action={
        <NeoButton variant="primary" style={{ marginTop: 12 }}>
          Add book
        </NeoButton>
      }
    />
  ),
};
