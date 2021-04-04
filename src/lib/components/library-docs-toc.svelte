<svelte:options immutable />

<script lang="ts">
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'

    import { page } from '$app/stores'
    const libraryPages: any[] = [{"text":"Getting started","href":"/docs/getting-started"},{"text":"Library","href":"/docs/library","children":[{"text":"Articulation","href":"/docs/library/articulation"},{"text":"Configuration","href":"/docs/library/configuration"},{"text":"Enigma_string","href":"/docs/library/enigma_string"},{"text":"Expression","href":"/docs/library/expression"},{"text":"General_library","href":"/docs/library/general_library"},{"text":"Measurement","href":"/docs/library/measurement"},{"text":"Note_entry","href":"/docs/library/note_entry"},{"text":"Notehead","href":"/docs/library/notehead"},{"text":"Transposition","href":"/docs/library/transposition"}]}]
</script>

<TableOfContents currentItem="{$page.path}" items="{libraryPages}" />
