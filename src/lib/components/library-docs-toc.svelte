<svelte:options immutable />

<script lang="ts">
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'

    import { page } from '$app/stores'

    const libraryPages: any[] = [
        { text: 'Getting-started', href: '/docs/getting-started' },
        {
            text: 'Library',
            href: '/docs/library',
            children: [
                { text: 'Articulation', href: '/docs/library/articulation' },
                { text: 'Configuration', href: '/docs/library/configuration' },
                { text: 'Enigma String', href: '/docs/library/enigma-string' },
                { text: 'Expression', href: '/docs/library/expression' },
                { text: 'General Library', href: '/docs/library/general-library' },
                { text: 'Measurement', href: '/docs/library/measurement' },
                { text: 'Note Entry', href: '/docs/library/note-entry' },
                { text: 'Notehead', href: '/docs/library/notehead' },
                { text: 'Transposition', href: '/docs/library/transposition' },
            ],
        },
    ]
</script>

<TableOfContents currentItem="{$page.path}" items="{libraryPages}" />
