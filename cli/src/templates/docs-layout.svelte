<script lang="ts">
    import { page } from '$app/stores'
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'

    import { libraryPages } from '../../lib/lib/library-pages'
</script>

<div class="flex md:space-x-12 wrapper my-16 w-full">
    <aside class="hidden md:block w-40 lg:w-64 flex-none pt-1">
        <TableOfContents currentItem="{$page.path}" items="{libraryPages}" size="large" />
    </aside>
    <div class="prose max-w-full mx-auto">
        <slot />
    </div>
</div>
