<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit'
    export const load: Load = async ({ fetch, page }) => {
        const response = await fetch(
            `/api/library/get-library-page-content?page=${page.params.slug}`
        )
        if (response.status !== 200) return { status: 404, error: new Error('Page not found') }
        const json = await response.json()

        return {
            props: {
                content: json.content,
            },
        }
    }
</script>

<script lang="ts">
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import TextContent from '@nick-mazuk/ui-svelte/src/typography/text-content/text-content.svelte'

    export let content = ''
</script>

<TextContent center fullWidth>
    <Markdown content="{content}" headerIds />
</TextContent>
