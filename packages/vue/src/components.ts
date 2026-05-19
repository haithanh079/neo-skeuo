import { defineComponent, h, type PropType } from "vue";
import { provideNeoTheme } from "./useNeoTheme.js";
import type { NeoButtonVariant, NeoElevation, NeoThemeMode } from "@neo-skeuo/tokens";

function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

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
          class: [
            "neo-btn",
            props.variant === "primary" && "neo-btn--primary",
            props.variant === "ghost" && "neo-btn--ghost",
          ],
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

export const NeoTextarea = defineComponent({
  name: "NeoTextarea",
  setup(_, { attrs }) {
    return () => h("textarea", { class: "neo-input", ...attrs });
  },
});

export const NeoSelect = defineComponent({
  name: "NeoSelect",
  setup(_, { slots, attrs }) {
    return () => h("select", { class: "neo-input", ...attrs }, slots.default?.());
  },
});

export const NeoCheckbox = defineComponent({
  name: "NeoCheckbox",
  setup(_, { attrs }) {
    return () => h("input", { type: "checkbox", class: "neo-checkbox", ...attrs });
  },
});

export const NeoRadio = defineComponent({
  name: "NeoRadio",
  setup(_, { attrs }) {
    return () => h("input", { type: "radio", class: "neo-radio", ...attrs });
  },
});

export const NeoSwitch = defineComponent({
  name: "NeoSwitch",
  setup(_, { attrs }) {
    return () => h("input", { type: "checkbox", role: "switch", class: "neo-switch", ...attrs });
  },
});

export const NeoSlider = defineComponent({
  name: "NeoSlider",
  setup(_, { attrs }) {
    return () => h("input", { type: "range", class: "neo-slider", ...attrs });
  },
});

export const NeoCard = defineComponent({
  name: "NeoCard",
  setup(_, { slots, attrs }) {
    return () => h("div", { class: "neo-card", ...attrs }, slots.default?.());
  },
});

export const NeoBadge = defineComponent({
  name: "NeoBadge",
  setup(_, { slots }) {
    return () => h("span", { class: "neo-tag" }, slots.default?.());
  },
});
export const NeoTag = NeoBadge;

export const NeoAlert = defineComponent({
  name: "NeoAlert",
  props: { variant: { type: String as PropType<"info" | "success" | "warning" | "error">, default: "info" } },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        "div",
        { class: cn("neo-alert", "neo-inset", `neo-alert--${props.variant}`), role: "alert", ...attrs },
        slots.default?.(),
      );
  },
});

export const NeoSpinner = defineComponent({
  name: "NeoSpinner",
  setup() {
    return () => h("span", { class: "neo-spinner", "aria-busy": true }, "◌");
  },
});

export const NeoSkeleton = defineComponent({
  name: "NeoSkeleton",
  setup() {
    return () => h("div", { class: "neo-skeleton" });
  },
});

export const NeoDivider = defineComponent({
  name: "NeoDivider",
  setup() {
    return () => h("hr", { class: "neo-divider" });
  },
});

export const NeoModal = defineComponent({
  name: "NeoModal",
  props: { open: Boolean, title: String },
  emits: ["close"],
  setup(props, { slots, emit }) {
    return () =>
      props.open
        ? h("div", { class: "neo-modal-backdrop neo-animate-in", onClick: () => emit("close") }, [
            h("div", { class: "neo-modal neo-raised", role: "dialog", "aria-modal": true }, [
              props.title ? h("h2", { class: "neo-modal__title" }, props.title) : null,
              slots.default?.(),
            ]),
          ])
        : null;
  },
});

export const NeoToast = defineComponent({
  name: "NeoToast",
  props: { message: { type: String, required: true } },
  setup(props) {
    return () => h("div", { class: "neo-toast neo-raised neo-animate-in", role: "status" }, props.message);
  },
});

export const NeoProgress = defineComponent({
  name: "NeoProgress",
  setup(_, { attrs }) {
    return () => h("progress", { class: "neo-input", ...attrs });
  },
});

export const NeoEmpty = defineComponent({
  name: "NeoEmpty",
  props: { description: { type: String, default: "No data" } },
  setup(props, { slots }) {
    return () => h("div", { class: "neo-empty neo-raised" }, [h("p", props.description), slots.default?.()]);
  },
});

export const NeoTabs = defineComponent({
  name: "NeoTabs",
  props: { tabs: { type: Array as PropType<string[]>, required: true }, active: { type: String, required: true } },
  emits: ["update:active"],
  setup(props, { emit }) {
    return () =>
      h("div", { class: "neo-tabs" }, [
        h(
          "div",
          { class: "neo-tabs__list", role: "tablist" },
          props.tabs.map((t) =>
            h(
              NeoButton,
              {
                role: "tab",
                "aria-selected": props.active === t,
                variant: props.active === t ? "primary" : "default",
                onClick: () => emit("update:active", t),
              },
              () => t,
            ),
          ),
        ),
      ]);
  },
});

export const NeoBreadcrumb = defineComponent({
  name: "NeoBreadcrumb",
  props: { items: { type: Array as PropType<Array<{ label: string; href?: string }>>, required: true } },
  setup(props) {
    return () =>
      h(
        "nav",
        { class: "neo-breadcrumb", "aria-label": "Breadcrumb" },
        props.items.map((item, i) =>
          h("span", { key: i }, [
            i > 0 ? h("span", { class: "neo-breadcrumb__sep" }, " > ") : null,
            item.href ? h("a", { href: item.href }, item.label) : item.label,
          ]),
        ),
      );
  },
});

export const NeoPagination = defineComponent({
  name: "NeoPagination",
  props: { page: { type: Number, required: true }, total: { type: Number, required: true } },
  emits: ["update:page"],
  setup(props, { emit }) {
    return () =>
      h(
        "div",
        { class: "neo-pagination" },
        Array.from({ length: props.total }, (_, i) => i + 1).map((p) =>
          h(NeoButton, { variant: p === props.page ? "primary" : "default", onClick: () => emit("update:page", p) }, () =>
            String(p),
          ),
        ),
      );
  },
});

export const NeoSteps = defineComponent({
  name: "NeoSteps",
  props: { steps: { type: Array as PropType<string[]>, required: true }, current: { type: Number, default: 0 } },
  setup(props) {
    return () =>
      h(
        "ol",
        { class: "neo-steps" },
        props.steps.map((s, i) =>
          h("li", { class: cn("neo-steps__item", i > props.current && "neo-steps__item--inactive"), key: s }, [
            h(NeoBadge, null, () => String(i + 1)),
            ` ${s}`,
          ]),
        ),
      );
  },
});

export const NeoTooltip = defineComponent({
  name: "NeoTooltip",
  props: { label: { type: String, required: true } },
  setup(props, { slots }) {
    return () =>
      h("span", { class: "neo-tooltip" }, [slots.default?.(), h("span", { class: "neo-tooltip__bubble", role: "tooltip" }, props.label)]);
  },
});

export const NeoTable = defineComponent({
  name: "NeoTable",
  props: {
    columns: { type: Array as PropType<string[]>, required: true },
    rows: { type: Array as PropType<string[][]>, required: true },
  },
  setup(props) {
    return () =>
      h("table", { class: "neo-table" }, [
        h("thead", [h("tr", props.columns.map((c) => h("th", c)))]),
        h(
          "tbody",
          props.rows.map((row, ri) => h("tr", { key: ri }, row.map((cell, ci) => h("td", { key: ci }, cell)))),
        ),
      ]);
  },
});

export const NeoList = defineComponent({
  name: "NeoList",
  props: { items: { type: Array as PropType<string[]>, required: true } },
  setup(props) {
    return () =>
      h(
        "ul",
        { class: "neo-list" },
        props.items.map((item) => h("li", { class: "neo-list__item", key: item }, item)),
      );
  },
});

export const NeoAvatar = defineComponent({
  name: "NeoAvatar",
  props: { label: { type: String, required: true } },
  setup(props) {
    return () => h("span", { class: "neo-avatar" }, props.label.slice(0, 1).toUpperCase());
  },
});

export function NeoThemePlugin(app: { provide: (k: symbol, v: unknown) => void }, options?: { theme?: NeoThemeMode }) {
  app.provide(Symbol.for("neo-vue-stub"), provideNeoTheme(options?.theme ?? "light"));
}
