<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Script from '$lib/components/script.svelte'
    import { formatNumber } from '@nick-mazuk/lib/esm/number-styling'
    import EmptyState from '@nick-mazuk/ui-svelte/src/components/empty-state/empty-state.svelte'
    import Button from '@nick-mazuk/ui-svelte/src/elements/button/button.svelte'
    import FileCode from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/file-code.svelte'
    import Note from '@nick-mazuk/ui-svelte/src/elements/note/note.svelte'
    import SearchInput from '@nick-mazuk/ui-svelte/src/form/inputs/search-input/search-input.svelte'
    import type { TextInputChangeEvent } from '@nick-mazuk/ui-svelte/src/form/inputs/text-input'
    import Container from '@nick-mazuk/ui-svelte/src/utilities/container/container.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
    import { Search } from 'js-search'
    import scriptData from '../lib/lib/script-data.json'
    import type { ScriptData } from '../lib/types/script-data'

    const scripts: ScriptData[] = scriptData
    const search = new Search('name')
    search.addIndex('name')
    search.addIndex('shortDescription')
    search.addIndex(['author', 'name'])
    search.addIndex('categories')

    const allIndexes = new Set<number>()

    const normalizeName = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036F]/gu, '')
    scripts.forEach((script, index) => {
        search.addDocument({
            ...script,
            name: normalizeName(script.name),
            index,
        })
        allIndexes.add(index)
    })

    let searchValue = $page.query.get('search') ?? ''
    let shouldUpdateUrlQuery = false
    const handleSearchChange = (event: TextInputChangeEvent) => {
        searchValue = event.detail.parsedValue
        shouldUpdateUrlQuery = true
    }

    type DisplayedDocuments = { items: Set<number>; first: number; last: number }
    const searchCache: {
        [key: string]: DisplayedDocuments
    } = {
        '': {
            items: allIndexes,
            first: 0,
            last: scripts.length - 1,
        },
    }

    let displayedDocuments: DisplayedDocuments = searchCache['']
    $: {
        const currentSearch = searchValue.trim()
        if (currentSearch in searchCache) {
            displayedDocuments = searchCache[currentSearch]
        } else {
            const results = search.search(currentSearch) as (ScriptData & { index: number })[]
            const sortedResults = results.sort((a, b) => a.name.localeCompare(b.name))
            displayedDocuments = {
                items: new Set(results.map((script) => script.index)),
                first: sortedResults[0]?.index ?? -1,
                last: sortedResults[sortedResults.length - 1]?.index ?? -1,
            }
            searchCache[currentSearch] = displayedDocuments
        }
    }
    $: if (typeof window !== 'undefined' && shouldUpdateUrlQuery) {
        window.history.replaceState(
            null,
            '',
            searchValue ? `/scripts?search=${searchValue}` : '/scripts'
        )
    }
</script>

<Seo
    title="Scripts"
    siteName="Finale Lua"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://finalelua.com${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://finalelua.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<main class="wrapper my-6" id="main-content">
    <Spacer />
    <h1 class="h3 text-center">Supercharge Finale</h1>
    <Spacer y="{0.5}" />
    <p class="text-center text-lg balance">
        Scripts to supercharge your Finale workflow, built by the Finale community
    </p>
    <Spacer />
    <div class="flex justify-center space-x-3">
        <Button variant="secondary" href="/">Learn more</Button>
        <Button href="/help/install">Get started</Button>
    </div>
    <Spacer />
    <h2 class="sr-only">All scripts</h2>
    <SearchInput
        on:change="{handleSearchChange}"
        placeholder="Search…"
        defaultValue="{searchValue}"
        helpText="Found {formatNumber(displayedDocuments.items.size)} script{displayedDocuments
            .items.size === 1
            ? ''
            : 's'}"
    />
    <Spacer />
    <Container>
        {#each scripts as item, index}
            <Script
                data="{item}"
                show="{displayedDocuments.items.has(index)}"
                first="{index === displayedDocuments.first}"
                last="{index === displayedDocuments.last}"
            />
        {/each}
        {#if displayedDocuments.items.size === 0}
            <EmptyState
                title="No scripts found"
                description="There are no scripts that match your search"
            >
                <svelte:fragment slot="image">
                    <FileCode class="w-32" />
                </svelte:fragment>
            </EmptyState>
        {/if}
    </Container>
    <Spacer />
    <Note label="Note">
        The development of these Lua scripts are totally separate from Finale, Makemusic, or their
        affiliates. No financial, tech support or other arrangements have been made with these
        companies. These scripts are created by the community, so they make have bugs, so use them
        at your own risk.
    </Note>
</main>
