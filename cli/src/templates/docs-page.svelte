<script lang="ts">
    import { page } from '$app/stores'

    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'

    import luaLogo from '$lib/assets/images/lua-logo.png'

    const content = `MARKDOWN_PLACEHOLDER`
</script>

<Seo
    title="TITLE_PLACEHOLDER"
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
