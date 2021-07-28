import type { TocItems } from '@nick-mazuk/ui-svelte/src/components/table-of-contents';

export const libraryPages: TocItems = [
    {
        text: 'Getting Started',
        href: '/docs/getting-started',
        children: [
            { text: 'Adding Scripts', href: '/docs/getting-started/adding-scripts' },
            { text: 'Resources', href: '/docs/getting-started/resources' },
            { text: 'Style Guide', href: '/docs/getting-started/style-guide' },
        ],
    },
    {
        text: 'Library',
        href: '/docs/library',
        children: [
            { text: 'Articulation', href: '/docs/library/articulation' },
            { text: 'Configuration', href: '/docs/library/configuration' },
            { text: 'Enigma String', href: '/docs/library/enigma-string' },
            { text: 'Expression', href: '/docs/library/expression' },
            { text: 'General Library', href: '/docs/library/general-library' },
            { text: 'Note Entry', href: '/docs/library/note-entry' },
            { text: 'Transposition', href: '/docs/library/transposition' },
        ],
    },
]
