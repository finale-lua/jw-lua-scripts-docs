<script lang="ts">
    import { page } from '$app/stores'

    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'

    import luaLogo from '$lib/assets/images/lua-logo.png'

    const content = `# Getting help

There are a few great resources for getting help with JW Lua development:

- [The JW Lua Facebook group](https://www.facebook.com/groups/742277119576336/)
- [Ask a question in the GitHub repo](https://github.com/Nick-Mazuk/jw-lua-scripts/issues/new?assignees=&labels=help&template=help.md&title=)

If you're having trouble with JW Lua in particular, you should ask a question in the Facebook group first. If you're having trouble with contributing to this project, ask a question in the GitHub repository.
`
</script>

<Seo
    title="Getting Help"
    siteName="JW Lua Scripts Docs"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://jwluascripts.com/${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://jwluascripts.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<Markdown content="{content}" headerIds />
