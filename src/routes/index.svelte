<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import { Search } from 'js-search'

    import FileCode from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/file-code.svelte'
    import EmptyState from '@nick-mazuk/ui-svelte/src/components/empty-state/empty-state.svelte'
    import SearchInput from '@nick-mazuk/ui-svelte/src/form/inputs/search-input/search-input.svelte'
    import type { TextInputChangeEvent } from '@nick-mazuk/ui-svelte/src/form/inputs/text-input'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
    import Script from '$lib/components/script.svelte'
    import scriptData from '$lib/lib/script-data.json'
    import type { ScriptData } from '$lib/types/script-data'
    import Container from '@nick-mazuk/ui-svelte/src/utilities/container/container.svelte'
    import { formatNumber } from '@nick-mazuk/lib/esm/number-styling'

    let scripts: ScriptData[] = scriptData
    const search = new Search('name')
    search.addIndex('name')
    search.addIndex('shortDescription')
    search.addIndex(['author', 'name'])
    search.addIndex('categories')

    const allNames = new Set<string>()

    const normalizeName = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    scripts.forEach((script) => {
        search.addDocument({
            ...script,
            name: normalizeName(script.name),
        })
        allNames.add(normalizeName(script.name))
    })

    let searchValue = ''

    const handleSearchChange = (event: TextInputChangeEvent) =>
        (searchValue = event.detail.parsedValue)

    type DisplayedDocuments = { items: Set<string>; first: string; last: string }
    const searchCache: {
        [key: string]: DisplayedDocuments
    } = {
        '': {
            items: allNames,
            first: normalizeName(scripts[0].name),
            last: normalizeName(scripts[scripts.length - 1].name),
        },
    }

    let displayedDocuments: DisplayedDocuments = searchCache['']
    $: {
        if (searchValue in searchCache) {
            displayedDocuments = searchCache[searchValue]
        } else {
            const results: ScriptData[] = search.search(searchValue)
            const sortedResults = results.sort((a, b) => a.name.localeCompare(b.name))
            displayedDocuments = {
                items: new Set(results.map((script: ScriptData) => script.name)),
                first: normalizeName(sortedResults[0]?.name ?? ''),
                last: normalizeName(sortedResults[results.length - 1]?.name ?? ''),
            }
        }
    }
</script>

<main class="wrapper my-6" id="main-content">
    <Spacer />
    <h1 class="h3 text-center">Supercharge Finale</h1>
    <Spacer y="{0.5}" />
    <p class="text-center text-lg balance">
        Scripts to supercharge your Finale workflow, built by the Finale community
    </p>
    <Spacer />
    <h2 class="sr-only">All scripts</h2>
    <SearchInput
        on:change="{handleSearchChange}"
        placeholder="Search…"
        helpText="Found {formatNumber(displayedDocuments.items.size)} script{displayedDocuments
            .items.size === 1
            ? ''
            : 's'}"
    />
    <Spacer />
    <Container>
        {#each scripts as item}
            <Script
                data="{item}"
                show="{displayedDocuments.items.has(normalizeName(item.name))}"
                first="{normalizeName(item.name) === displayedDocuments.first}"
                last="{normalizeName(item.name) === displayedDocuments.last}"
            />
        {/each}
        {#if displayedDocuments.items.size === 0}
            <EmptyState
                title="No scripts found"
                description="There are no scripts that match your search"
            >
                <svelte:fragment slot="image">
                    <FileCode class="w-40" />
                </svelte:fragment>
            </EmptyState>
        {/if}
    </Container>
</main>
