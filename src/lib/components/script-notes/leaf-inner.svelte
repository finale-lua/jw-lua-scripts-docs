<script lang="ts">
    export let text: string
    $: parts = text.split('  \n')
</script>

{#each parts as part, index}
    {#if index !== 0}
        <br />
    {/if}
    {part}
{/each}
