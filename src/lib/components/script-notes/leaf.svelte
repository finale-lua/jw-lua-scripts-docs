<script lang="ts">
    import InlineCode from './inline-code.svelte'

    export let text: string
</script>

{#if text.includes('`')}
    {#each text.split('`') as part, index}
        {#if index % 2 === 1}
            <InlineCode>{part}</InlineCode>
        {:else}
            {part}
        {/if}
    {/each}
{:else}
    {text}
{/if}
