<svelte:options immutable />

<script lang="ts">
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'

    import { page } from '$app/stores'
    const libraryPages: any[] = []
</script>

<TableOfContents currentItem="{$page.path}" items="{libraryPages}" />
