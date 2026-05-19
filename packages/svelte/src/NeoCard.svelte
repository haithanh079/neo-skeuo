<script lang="ts">
  let { children, class: className = "" }: { children?: import("svelte").Snippet; class?: string } = $props();
</script>

<div class="neo-card {className}">
  {@render children?.()}
</div>
