<script lang="ts">
  import type { PageData } from './$types';
  
  let { data }: { data: PageData } = $props();
</script>

{#if data.testing.length === 0}
  <p>Data kosong</p>
{:else}
  <ul>
    {#each data.testing as item (item.id)}
      <li>{item.name}-{item.created_at}</li>
    {/each}
  </ul>
{/if}