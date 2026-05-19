<script lang="ts">
  import type { NeoElevation } from "@neo-skeuo/tokens";

  interface Props {
    elevation?: NeoElevation;
    class?: string;
    children?: import("svelte").Snippet;
  }

  let { elevation = "raised", class: className = "", children }: Props = $props();
  const surfaceClass =
    elevation === "inset" ? "neo-inset" : elevation === "pressed" ? "neo-pressed" : elevation === "flat" ? "" : "neo-raised";
</script>

<div class="{surfaceClass} {className}">
  {@render children?.()}
</div>
