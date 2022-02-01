<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'

    const content = `# RGP Lua

- [Devenv](/docs/rgp-lua/devenv)
- [Finaleplugin Properties](/docs/rgp-lua/finaleplugin-properties)
- [Getting Started](/docs/rgp-lua/getting-started)
- [RGP Lua Config](/docs/rgp-lua/rgp-lua-config)
`
</script>

<Seo
    title="RGP Lua"
    siteName="Finale Lua Docs"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://finalelua.com/${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://finalelua.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<Markdown content="{content}" headerIds />
