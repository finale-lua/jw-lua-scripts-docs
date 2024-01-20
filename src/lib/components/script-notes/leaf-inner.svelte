<script lang="ts">
    import { marked } from 'marked'
    export let text: string
    $: parts = text.split('  \n')
</script>

{#each parts as part, index}
    {#if index !== 0}
        <br />
    {/if}
    {@html marked.parseInline(part)}
{/each}
