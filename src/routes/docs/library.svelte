<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'

    const content = `# Library
`
</script>

<Markdown content="{content}" headerIds />