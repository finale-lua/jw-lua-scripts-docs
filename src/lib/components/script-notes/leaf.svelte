<script lang="ts">
    import InlineCode from './inline-code.svelte'
    import LeafInner from './leaf-inner.svelte'

    export let text: string
</script>

{#if text.includes('`')}
    {#each text.split('`') as part, index}
        {#if index % 2 === 1}
            <InlineCode>{part}</InlineCode>
        {:else}
            <LeafInner text="{part}" />
        {/if}
    {/each}
{:else}
    <LeafInner text="{text}" />
{/if}
