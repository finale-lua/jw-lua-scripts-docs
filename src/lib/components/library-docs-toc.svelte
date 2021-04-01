<svelte:options immutable />

<script lang="ts">
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'

    import { page } from '$app/stores'
    const libraryPages: any[] = [{"text":"Getting started","href":"/docs/getting-started"},{"text":"Library","href":"/docs/library","children":[{"text":"File Test","href":"/docs/library/file-test"},{"text":"Readme","href":"/docs/library/readme"}]}]
</script>

<TableOfContents currentItem="{$page.path}" items="{libraryPages}" />
