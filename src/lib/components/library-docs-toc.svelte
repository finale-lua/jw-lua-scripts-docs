<svelte:options immutable />

<script lang="ts">
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'

    import { page } from '$app/stores'
    const libraryPages: any[] = [{"text":"Getting Started","href":"/docs/getting-started","children":[{"text":"Adding Scripts","href":"/docs/getting-started/adding-scripts"},{"text":"Style Guide","href":"/docs/getting-started/style-guide"}]},{"text":"Library","href":"/docs/library","children":[{"text":"Configuration","href":"/docs/library/configuration"},{"text":"Enigma String","href":"/docs/library/enigma-string"},{"text":"Expression","href":"/docs/library/expression"},{"text":"General Library","href":"/docs/library/general-library"},{"text":"Note Entry","href":"/docs/library/note-entry"}]}]
</script>

<TableOfContents currentItem="{$page.path}" items="{libraryPages}" />
