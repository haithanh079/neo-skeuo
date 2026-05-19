import { defineComponent, h } from "vue";
import { toAntDesignVueTheme, type NeoThemeMode } from "@neo-skeuo/tokens";
import { NeoProvider } from "@neo-skeuo/vue";

export function toAntDesignVueThemeExport(mode: "light" | "dark" = "light") {
  return toAntDesignVueTheme(mode);
}

export const NeoSkeuoAntDesignVueProvider = defineComponent({
  name: "NeoSkeuoAntDesignVueProvider",
  props: { theme: { type: String as () => NeoThemeMode, default: "light" } },
  setup(props, { slots }) {
    return () =>
      h(
        NeoProvider,
        { theme: props.theme, class: "neo-skeuo" },
        () => slots.default?.(),
      );
  },
});
