import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Affix,
  Anchor,
  BackTop,
  Button,
  Calendar,
  Carousel,
  FloatButton,
  Image,
  QRCode,
  Space,
  Tour,
  Typography,
  Watermark,
} from "antd";
import type { TourProps } from "antd";
import "antd/dist/reset.css";
import { antdMeta } from "./decorators";

const meta: Meta = { ...antdMeta, title: "Neo/Ant Design/Tier 2/Extras" };
export default meta;

export const SpaceStory: StoryObj = {
  name: "Space",
  render: () => (
    <Space size="middle" wrap>
      <Button>Left</Button>
      <Button type="primary">
        Center
      </Button>
      <Button danger>Right</Button>
    </Space>
  ),
};

export const AffixStory: StoryObj = {
  name: "Affix",
  render: () => (
    <div id="affix-scroll" style={{ height: 200, overflow: "auto", border: "1px dashed var(--neo-ink-muted)", padding: 16 }}>
      <div style={{ height: 120 }} />
      <Affix target={() => (document.getElementById("affix-scroll") as HTMLElement) ?? window}>
        <Button type="primary">Pinned action</Button>
      </Affix>
      <div style={{ height: 400 }} />
    </div>
  ),
};

export const BackTopStory: StoryObj = {
  name: "BackTop",
  render: () => (
    <div style={{ height: 280, overflow: "auto", border: "1px dashed var(--neo-ink-muted)", padding: 16 }}>
      <div style={{ height: 600 }}>
        <Typography.Paragraph>Scroll down</Typography.Paragraph>
      </div>
      <BackTop />
    </div>
  ),
};

export const AnchorStory: StoryObj = {
  name: "Anchor",
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <Anchor
        items={[
          { key: "overview", href: "#overview", title: "Overview" },
          { key: "rules", href: "#rules", title: "Rules" },
          { key: "prizes", href: "#prizes", title: "Prizes" },
        ]}
      />
      <div style={{ flex: 1 }}>
        <div id="overview" style={{ height: 120 }}>
          <Typography.Title level={5}>Overview</Typography.Title>
        </div>
        <div id="rules" style={{ height: 120 }}>
          <Typography.Title level={5}>Rules</Typography.Title>
        </div>
        <div id="prizes" style={{ height: 120 }}>
          <Typography.Title level={5}>Prizes</Typography.Title>
        </div>
      </div>
    </div>
  ),
};

export const CalendarStory: StoryObj = {
  name: "Calendar",
  render: () => <Calendar fullscreen={false} style={{ maxWidth: 420, border: "2px solid var(--neo-ink)", borderRadius: 12 }} />,
};

export const CarouselStory: StoryObj = {
  name: "Carousel",
  render: () => (
    <Carousel style={{ maxWidth: 420 }}>
      {["Spring fair", "Summer reading", "Winter bingo"].map((title) => (
        <div key={title}>
          <div style={{ height: 160, display: "grid", placeItems: "center", background: "var(--neo-inset)" }}>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {title}
            </Typography.Title>
          </div>
        </div>
      ))}
    </Carousel>
  ),
};

export const ImageStory: StoryObj = {
  name: "Image",
  render: () => (
    <Image
      width={200}
      alt="Book cover"
      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop"
    />
  ),
};

export const QRCodeStory: StoryObj = {
  name: "QRCode",
  render: () => <QRCode value="https://book-bingo.example/check-in" />,
};

export const WatermarkStory: StoryObj = {
  name: "Watermark",
  render: () => (
    <Watermark content="Book Bingo">
      <div style={{ height: 120, display: "grid", placeItems: "center", background: "var(--neo-surface)", borderRadius: 8 }}>
        <Typography.Text>Preview card</Typography.Text>
      </div>
    </Watermark>
  ),
};

function TourDemo() {
  const ref1 = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const steps: TourProps["steps"] = [
    { title: "Create", description: "Add a new book.", target: () => ref1.current! },
  ];
  return (
    <>
      <Button ref={ref1} type="primary" onClick={() => setOpen(true)}>
        Start tour
      </Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
}

export const TourStory: StoryObj = {
  name: "Tour",
  render: () => <TourDemo />,
};

export const FloatButtonStory: StoryObj = {
  name: "FloatButton",
  render: () => (
    <div style={{ height: 160, position: "relative" }}>
      <FloatButton type="primary" style={{ insetInlineEnd: 24, bottom: 24 }} tooltip="Quick add" />
    </div>
  ),
};
