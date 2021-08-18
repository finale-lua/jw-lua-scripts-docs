<script lang="ts">
    import { page } from '$app/stores'
    import TableOfContents from '@nick-mazuk/ui-svelte/src/components/table-of-contents/table-of-contents.svelte'
    import Button from '@nick-mazuk/ui-svelte/src/elements/button/button.svelte'
    import Github from '@nick-mazuk/ui-svelte/src/elements/icon/github.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    import { libraryPages } from '../../lib/lib/library-pages'

    const githubPrefix = 'https://github.com/Nick-Mazuk/jw-lua-scripts/blob/master/'
    let githubUrl = ''
    $: {
        const path = $page.path.replace('/docs/', '')
        if (path.startsWith('library/'))
            githubUrl = githubPrefix + 'src/' + path.replace(/-/gu, '_') + '.lua'
        else githubUrl = githubPrefix + 'docs/' + path + '.md'
    }
</script>

<div class="flex md:space-x-12 wrapper my-16 w-full">
    <aside class="hidden md:block w-40 lg:w-64 flex-none pt-1">
        <TableOfContents currentItem="{$page.path}" items="{libraryPages}" size="large" />
    </aside>
    <div>
        <div class="prose max-w-full mx-auto">
            <slot />
        </div>
        {#if githubUrl}
            <Spacer />
            <div class="flex justify-end">
                <Button variant="secondary" prefix="{Github}" href="{githubUrl}">
                    Edit page on GitHub
                </Button>
            </div>
        {/if}
    </div>
</div>
