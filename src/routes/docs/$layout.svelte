<script lang="ts">
    import TableOfContents from '../../lib/components/library-docs-toc.svelte'
    import TextContent from '@nick-mazuk/ui-svelte/src/typography/text-content/text-content.svelte'
    import DocsSearch from '../../lib/components/docs-search.svelte'
</script>

<div class="flex md:space-x-12 wrapper my-16 w-full">
    <aside class="hidden md:block w-40 lg:w-64 flex-none pt-1">
        <DocsSearch />
        <div class="h-4"></div>
        <TableOfContents />
    </aside>
    <TextContent center fullWidth>
        <slot />
    </TextContent>
</div>
