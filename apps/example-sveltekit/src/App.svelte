<script lang="ts">
  import NeoButton from "@neo-skeuo/svelte/NeoButton.svelte";
  import NeoProvider from "@neo-skeuo/svelte/NeoProvider.svelte";
  import NeoSurface from "@neo-skeuo/svelte/NeoSurface.svelte";

  let theme: "light" | "dark" = $state("light");
</script>

<NeoProvider {theme}>
  <NeoSurface elevation="raised" style="padding: 24px; max-width: 320px">
    <p>Neo-skeuo SvelteKit demo</p>
    <NeoButton variant="primary" onclick={() => (theme = theme === "light" ? "dark" : "light")}>
      Toggle theme ({theme})
    </NeoButton>
  </NeoSurface>
</NeoProvider>
