<svelte:options immutable />

<script lang="ts">
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'

    import { page } from '$app/stores'
    const libraryPages: any[] = [{"text":"Readme","href":"/library/readme"},{"text":"File 2","href":"/library/file-2"}]
</script>

<TableOfContents currentItem="{$page.path}" items="{libraryPages}" />
