import { ConfigProvider } from "ant-design-vue";
import { computed, defineComponent, h } from "vue";
import { resolveThemeMode, toAntDesignVueTheme, type NeoThemeMode } from "@neo-skeuo/tokens";
import { NeoProvider } from "@neo-skeuo/vue";

export function toAntDesignVueThemeExport(mode: "light" | "dark" = "light") {
  return toAntDesignVueTheme(mode);
}

export const NeoSkeuoAntDesignVueProvider = defineComponent({
  name: "NeoSkeuoAntDesignVueProvider",
  props: { theme: { type: String as () => NeoThemeMode, default: "light" } },
  setup(props, { slots }) {
    const antTheme = computed(() => toAntDesignVueTheme(resolveThemeMode(props.theme)));
    return () =>
      h(
        NeoProvider,
        { theme: props.theme, class: "neo-skeuo" },
        () => h(ConfigProvider, { theme: antTheme.value }, () => slots.default?.()),
      );
  },
});

export { toAntDesignVueTheme } from "@neo-skeuo/tokens";
