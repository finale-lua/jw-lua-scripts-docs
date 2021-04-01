<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit'
    export const load: Load = async ({ fetch }) => {
        const response = await fetch('/library/get-toc')
        if (response.status !== 200)
            return { status: 500, error: new Error('Cound not fetch file paths') }
        const json = await response.json()
        console.log({ json })

        return {
            props: {
                libraryPages: json.allFiles,
            },
        }
    }
</script>

<script lang="ts">
    import TableOfContents from '@nick-mazuk/ui-svelte/src/navigation/table-of-contents/table-of-contents.svelte'
    import TextContent from '@nick-mazuk/ui-svelte/src/typography/text-content/text-content.svelte'
    import { page } from '$app/stores'
    export let libraryPages: any[] = []
</script>

<div class="flex md:space-x-12 wrapper my-16">
    <aside class="hidden md:block w-40 lg:w-64 flex-none">
        <TableOfContents currentItem="{$page.path}" items="{libraryPages}" />
    </aside>
    <TextContent center fullWidth>
        <slot />
    </TextContent>
</div>
