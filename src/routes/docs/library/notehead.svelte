<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'

    const content = `# Notehead

- [change_shape](#change_shape)

## change_shape

\`\`\`lua
notehead.change_shape(note, shape)
\`\`\`

Changes the given notehead to a specified notehead descriptor string. Currently only supports "diamond".

| Input | Type | Description |
| --- | --- | --- |
| \`note\` | \`FCNote\` |  |
| \`shape\` | \`lua string\` |  |

| Output type | Description |
| --- | --- |
| \`FCNoteheadMod\` | the new notehead mod record created |`
</script>

<Seo
    title="Notehead"
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
