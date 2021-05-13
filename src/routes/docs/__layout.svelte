<script lang="ts">
    import { page } from '$app/stores'
    import DocsSearch from '../../lib/components/docs-search.svelte'
    import TextContent from '@nick-mazuk/ui-svelte/src/typography/text-content/text-content.svelte'
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'

    import { libraryPages } from '../../lib/lib/library-pages'
</script>

<div class="flex md:space-x-12 wrapper my-16 w-full">
    <aside class="hidden md:block w-40 lg:w-64 flex-none pt-1">
        <DocsSearch />
        <div class="h-4"></div>
        <TableOfContents currentItem="{$page.path}" items="{libraryPages}" size="large" />
    </aside>
    <TextContent center fullWidth>
        <slot />
    </TextContent>
</div>
