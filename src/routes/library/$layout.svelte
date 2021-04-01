<script lang="ts">
    import TableOfContents from '../../lib/components/library-docs-toc.svelte'
    import TextContent from '@nick-mazuk/ui-svelte/src/typography/text-content/text-content.svelte'
</script>

<div class="flex md:space-x-12 wrapper my-16">
    <aside class="hidden md:block w-40 lg:w-64 flex-none">
        <TableOfContents />
    </aside>
    <TextContent center fullWidth>
        <slot />
    </TextContent>
</div>
