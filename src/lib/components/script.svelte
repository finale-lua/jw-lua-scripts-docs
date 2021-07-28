<script lang="ts">
    import Badge from '@nick-mazuk/ui-svelte/src/elements/badge/badge.svelte'
    import type { ScriptData } from '$lib/types/script-data'
    import Button from '@nick-mazuk/ui-svelte/src/elements/button/button.svelte'
    import { download } from '$lib/lib/download-file'
    import { sentenceCase } from '@nick-mazuk/lib/text-styling'
    import { format } from 'date-fns'

    export let data: ScriptData
    export let show: boolean
    export let first: boolean
    export let last: boolean

    let isDownloading = false
    let showMore = false

    const handleDownload = async () => {
        isDownloading = true
        const response = await fetch(
            `https://raw.githubusercontent.com/Nick-Mazuk/jw-lua-scripts/master/dist/${data.fileName}`
        )
        const file = await response.text()
        download(data.fileName, file)
        isDownloading = false
    }

    $: if (show) showMore = false
</script>

<article
    class:hidden="{!show}"
    class="border-b py-6"
    class:pt-0="{first}"
    class:pb-0="{last}"
    class:border-none="{last}"
    style="content-visibility: auto; content-intrinsic-size: 1px 105px"
>
    <div class="flex space-x-6 items-center justify-between">
        <div>
            <h3 class="h5">{sentenceCase(data.name)}</h3>
            <p>{data.shortDescription}</p>
        </div>
        <div class="flex-none hidden sm:block">
            <Button size="small" on:click="{handleDownload}" loading="{isDownloading}">
                Download
            </Button>
        </div>
    </div>
    <div class="flex mt-3 space-x-3 items-baseline sm:space-x-0 sm:mt-0">
        <div class="sm:hidden">
            <Button size="small" on:click="{handleDownload}" loading="{isDownloading}">
                Download
            </Button>
        </div>
        <div>
            <Button
                variant="link"
                glue="{['left', 'bottom', 'right']}"
                on:click="{() => (showMore = !showMore)}"
            >
                {showMore ? 'Hide' : 'Show'} details
            </Button>
        </div>
    </div>
    {#if showMore}
        <div class="pt-3 text-gray-700">
            {#if data.notes}
                <p class="my-3">{data.notes}</p>
            {/if}
            {#if data.author.name || data.author.website || data.author.email}
                <h4 class="h6">Author</h4>
                {#if data.author.name}
                    <p>{data.author.name}</p>
                {/if}
                {#if data.author.website}
                    <p>
                        Website: <a href="{data.author.website}" target="_blank" rel="noreferrer">
                            {data.author.website}
                        </a>
                    </p>
                {/if}
                {#if data.author.email}
                    <p>Email: <a href="mailto:{data.author.email}">{data.author.email}</a></p>
                {/if}
            {/if}
            {#if data.categories.length > 0}
                <h4 class="h6">Categories</h4>
                <div class="flex space-x-0.5 mt-1">
                    {#each data.categories as category}
                        <Badge>{category}</Badge>
                    {/each}
                </div>
            {/if}
            {#if data.version || data.date}
                <h4 class="h6">Version</h4>
                <p>Version {data.version}</p>
                {#if data.date}
                    <p>{format(new Date(data.date), 'MMMM d, YYY')}</p>
                {/if}
            {/if}
            {#if data.requireSelection || data.requireScore}
                <h4 class="h6">Requirements</h4>
                {#if data.requireSelection}
                    <p>Requires music selection to run</p>
                {/if}
                {#if data.requireScore}
                    <p>Requires score view to run</p>
                {/if}
            {/if}
            {#if data.copyright}
                <h4 class="h6">Licence</h4>
                <p>Copyright {data.copyright}</p>
            {/if}
        </div>
    {/if}
</article>

<style>
    h4 {
        @apply text-foreground mt-3;
    }
</style>