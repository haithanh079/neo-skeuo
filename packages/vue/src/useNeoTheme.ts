import { inject, provide, ref, computed, type InjectionKey, type Ref } from "vue";
import { resolveThemeMode, type NeoResolvedTheme, type NeoThemeMode } from "@neo-skeuo/tokens";

const key: InjectionKey<{ mode: Ref<NeoThemeMode>; resolved: Ref<NeoResolvedTheme>; setMode: (m: NeoThemeMode) => void }> =
  Symbol("neo-theme");

export function provideNeoTheme(initial: NeoThemeMode = "light") {
  const mode = ref<NeoThemeMode>(initial);
  const resolved = computed(() => resolveThemeMode(mode.value, false));
  const setMode = (m: NeoThemeMode) => {
    mode.value = m;
  };
  provide(key, { mode, resolved, setMode });
  return { mode, resolved, setMode };
}

export function useNeoTheme() {
  const ctx = inject(key);
  if (!ctx) throw new Error("useNeoTheme requires NeoThemePlugin or provideNeoTheme");
  return ctx;
}
