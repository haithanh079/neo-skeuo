import type { Meta, StoryObj } from "@storybook/react";
import {
  NeoButton,
  NeoCard,
  NeoCheckbox,
  NeoInput,
  NeoInputNumber,
  NeoRadio,
  NeoSelect,
  NeoSlider,
  NeoSwitch,
  NeoTextarea,
} from "@neo-skeuo/react";
import { primitiveMeta } from "./decorators";

const meta: Meta = {
  ...primitiveMeta,
  title: "Neo/Primitives/Form",
};
export default meta;

const stack = { display: "flex", flexDirection: "column" as const, gap: 12, maxWidth: 360 };

export const Inputs: StoryObj = {
  render: () => (
    <div style={stack}>
      <NeoInput placeholder="Text input" />
      <NeoInput type="password" placeholder="Password" />
      <NeoTextarea placeholder="Textarea" rows={3} />
      <NeoInputNumber type="number" placeholder="Number" />
      <NeoSelect defaultValue="">
        <option value="" disabled>
          Select…
        </option>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
      </NeoSelect>
    </div>
  ),
};

export const Toggles: StoryObj = {
  render: () => (
    <div style={{ ...stack, gap: 16 }}>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <NeoCheckbox defaultChecked /> Checkbox
      </label>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <NeoRadio name="r" defaultChecked /> Radio
      </label>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <NeoSwitch defaultChecked /> Switch
      </label>
      <NeoSlider defaultValue={50} />
    </div>
  ),
};

export const FormCard: StoryObj = {
  render: () => (
    <NeoCard style={{ maxWidth: 320 }}>
      <NeoInput placeholder="Title" />
      <NeoButton variant="primary">Save</NeoButton>
    </NeoCard>
  ),
};
