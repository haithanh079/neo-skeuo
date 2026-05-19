import { defineComponent, h } from "vue";
import { provideNeoTheme } from "./useNeoTheme.js";
import type { NeoButtonVariant, NeoElevation, NeoThemeMode } from "@neo-skeuo/tokens";

export const NeoProvider = defineComponent({
  name: "NeoProvider",
  props: {
    theme: { type: String as () => NeoThemeMode, default: "light" },
    class: { type: String, default: "neo-skeuo" },
  },
  setup(props, { slots }) {
    const { resolved } = provideNeoTheme(props.theme);
    return () => h("div", { class: props.class, "data-neo-theme": resolved.value }, slots.default?.());
  },
});

export const NeoButton = defineComponent({
  name: "NeoButton",
  props: { variant: { type: String as () => NeoButtonVariant, default: "default" }, disabled: Boolean },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        "button",
        {
          type: "button",
          class: ["neo-btn", props.variant === "primary" && "neo-btn--primary"],
          disabled: props.disabled,
          ...attrs,
        },
        slots.default?.(),
      );
  },
});

export const NeoSurface = defineComponent({
  name: "NeoSurface",
  props: { elevation: { type: String as () => NeoElevation, default: "raised" } },
  setup(props, { slots, attrs }) {
    const cls =
      props.elevation === "inset" ? "neo-inset" : props.elevation === "pressed" ? "neo-pressed" : "neo-raised";
    return () => h("div", { class: cls, ...attrs }, slots.default?.());
  },
});

export const NeoInput = defineComponent({
  name: "NeoInput",
  setup(_, { attrs }) {
    return () => h("input", { class: "neo-input", ...attrs });
  },
});

export const NeoCard = defineComponent({
  name: "NeoCard",
  setup(_, { slots, attrs }) {
    return () => h("div", { class: "neo-card", ...attrs }, slots.default?.());
  },
});

// Re-export stubs for matrix parity
export const NeoSelect = NeoInput;
export const NeoCheckbox = NeoInput;
export const NeoRadio = NeoInput;
export const NeoSwitch = NeoInput;
export const NeoSlider = NeoInput;
export const NeoBadge = defineComponent({ name: "NeoBadge", setup(_, { slots }) { return () => h("span", { class: "neo-tag" }, slots.default?.()); } });
export const NeoTag = NeoBadge;
export const NeoModal = NeoSurface;
export const NeoAlert = NeoSurface;
export const NeoToast = NeoSurface;
export const NeoProgress = NeoSurface;
export const NeoSpinner = defineComponent({ name: "NeoSpinner", setup: () => () => h("span", "◌") });
export const NeoSkeleton = NeoSurface;
export const NeoEmpty = NeoSurface;
export const NeoTabs = NeoSurface;
export const NeoBreadcrumb = NeoSurface;
export const NeoPagination = NeoSurface;
export const NeoSteps = NeoSurface;
export const NeoTooltip = NeoSurface;
export const NeoTable = NeoSurface;
export const NeoList = NeoSurface;
export const NeoAvatar = NeoSurface;
export const NeoDivider = defineComponent({ name: "NeoDivider", setup: () => () => h("hr") });

export function NeoThemePlugin(app: { provide: (k: symbol, v: unknown) => void }, options?: { theme?: NeoThemeMode }) {
  app.provide(Symbol.for("neo-vue-stub"), provideNeoTheme(options?.theme ?? "light"));
}
