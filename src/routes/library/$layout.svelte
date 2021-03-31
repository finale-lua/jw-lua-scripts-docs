<script lang="ts">
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'
    import { page } from '$app/stores'
</script>

<div class="flex md:space-x-12 wrapper my-16">
    <aside class="hidden md:block w-40 lg:w-64 flex-none">
        <TableOfContents
            currentItem="{$page.path}"
            items="{[{ href: '/library/readme', text: 'Readme' }]}"
        />
    </aside>
    <slot />
</div>
