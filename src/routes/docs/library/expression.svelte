<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'

    const content = `# Expression

- [get_music_region](#get_music_region)
- [get_associated_entry](#get_associated_entry)
- [calc_handle_offset_for_smart_shape](#calc_handle_offset_for_smart_shape)
- [calc_text_width](#calc_text_width)
- [is_for_current_part](#is_for_current_part)

## get_music_region

\`\`\`lua
expression.get_music_region(exp_assign)
\`\`\`

Returns a music region corresponding to the input expression assignment.

| Input | Type | Description |
| --- | --- | --- |
| \`exp_assign\` | \`FCExpression\` |  |

| Output type | Description |
| --- | --- |
| \`FCMusicRegion\` |  |

## get_associated_entry

\`\`\`lua
expression.get_associated_entry(exp_assign)
\`\`\`

Returns the note entry associated with the input expression assignment, if any.

| Input | Type | Description |
| --- | --- | --- |
| \`exp_assign\` | \`FCExpression\` |  |

| Output type | Description |
| --- | --- |
| \`FCNoteEntry\` | associated entry or nil if none |

## calc_handle_offset_for_smart_shape

\`\`\`lua
expression.calc_handle_offset_for_smart_shape(exp_assign)
\`\`\`

Returns the horizontal EVPU offset for a smart shape endpoint to align exactly with the handle of the input expression, given that they both have the same EDU position.

| Input | Type | Description |
| --- | --- | --- |
| \`exp_assign\` | \`FCExpression\` |  |

| Output type | Description |
| --- | --- |
| \`number\` |  |

## calc_text_width

\`\`\`lua
expression.calc_text_width(expression_def, expand_tags)
\`\`\`

Returns the text advance width of the input expression definition.

| Input | Type | Description |
| --- | --- | --- |
| \`expression_def\` | \`FCTextExpessionDef\` |  |
| \`expand_tags\` (optional) | \`boolean\` | defaults to false, currently only supports \`^value()\` |

| Output type | Description |
| --- | --- |
| \`number\` |  |

## is_for_current_part

\`\`\`lua
expression.is_for_current_part(exp_assign, current_part)
\`\`\`

Returns true if the expression assignment is assigned to the current part or score.

| Input | Type | Description |
| --- | --- | --- |
| \`exp_assign\` | \`FCExpression\` |  |
| \`current_part\` (optional) | \`FCPart\` | defaults to current part, but it can be supplied if the caller has already calculated it. |

| Output type | Description |
| --- | --- |
| \`boolean\` |  |`
</script>

<Seo
    title="Expression"
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
