<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'

    const content = `# Articulation

- [delete_from_entry_by_char_num](#delete_from_entry_by_char_num)
- [is_note_side](#is_note_side)
- [calc_main_character_dimensions](#calc_main_character_dimensions)

## delete_from_entry_by_char_num

\`\`\`lua
articulation.delete_from_entry_by_char_num(entry, char_num)
\`\`\`

Removes any articulation assignment that has the specified character as its above-character.

| Input | Type | Description |
| --- | --- | --- |
| \`entry\` | \`FCNoteEntry\` |  |
| \`char_num\` | \`number\` | UTF-32 code of character (which is the same as ASCII for ASCII characters) |

## is_note_side

\`\`\`lua
articulation.is_note_side(artic, curr_pos)
\`\`\`

Uses \`FCArticulation.CalcMetricPos\` to determine if the input articulation is on the note-side.

| Input | Type | Description |
| --- | --- | --- |
| \`artic\` | \`FCArticulation\` |  |
| \`curr_pos\` (optional) | \`FCPoint\` | current position of articulation that will be calculated if not supplied |

| Output type | Description |
| --- | --- |
| \`boolean\` | true if on note-side, otherwise false |

## calc_main_character_dimensions

\`\`\`lua
articulation.calc_main_character_dimensions(artic)
\`\`\`

Uses \`FCTextMetrics:LoadArticulation\` to determine the dimensions of the main character

| Input | Type | Description |
| --- | --- | --- |
| \`artic_def\` | \`FCArticulationDef\` |  |

| Output type | Description |
| --- | --- |
| \`number, number\` | the width and height of the main articulation character in (possibly fractional) evpus, or 0, 0 if it failed to load metrics |`
</script>

<Seo
    title="Articulation"
    siteName="Finale Lua Docs"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://www.finalelua.com${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://finalelua.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<Markdown content="{content}" headerIds />
