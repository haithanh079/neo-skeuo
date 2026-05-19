<script lang="ts">
  import type { NeoButtonVariant } from "@neo-skeuo/tokens";

  interface Props {
    variant?: NeoButtonVariant;
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    children?: import("svelte").Snippet;
  }

  let { variant = "default", disabled = false, onclick, children }: Props = $props();
</script>

<button type="button" class="neo-btn" class:neo-btn--primary={variant === 'primary'} {disabled} {onclick}>
  {@render children?.()}
</button>
