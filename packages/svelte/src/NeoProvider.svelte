<script lang="ts">
  import type { NeoThemeMode } from "@neo-skeuo/tokens";
  import { resolveThemeMode } from "@neo-skeuo/tokens";

  interface Props {
    theme?: NeoThemeMode;
    class?: string;
    children?: import("svelte").Snippet;
  }

  let { theme = "light", class: className = "neo-skeuo", children }: Props = $props();
  const resolved = $derived(resolveThemeMode(theme, false));
</script>

<div class={className} data-neo-theme={resolved}>
  {@render children?.()}
</div>
