<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Script from '$lib/components/script.svelte'
    import { formatNumber } from '@nick-mazuk/lib/esm/number-styling'
    import EmptyState from '@nick-mazuk/ui-svelte/src/components/empty-state/empty-state.svelte'
    import Button from '@nick-mazuk/ui-svelte/src/elements/button/button.svelte'
    import ArrowDown from '@nick-mazuk/ui-svelte/src/elements/icon/arrow-down.svelte'
    import Clock from '@nick-mazuk/ui-svelte/src/elements/icon/clock.svelte'
    import FileCode from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/file-code.svelte'
    import Note from '@nick-mazuk/ui-svelte/src/elements/note/note.svelte'
    import SearchInput from '@nick-mazuk/ui-svelte/src/form/inputs/search-input/search-input.svelte'
    import Select from '@nick-mazuk/ui-svelte/src/form/inputs/select/select.svelte'
    import type { TextInputChangeEvent } from '@nick-mazuk/ui-svelte/src/form/inputs/text-input'
    import Container from '@nick-mazuk/ui-svelte/src/utilities/container/container.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
    import { Search } from 'js-search'
    import scriptData from '../lib/lib/script-data.json'
    import type { ScriptData } from '../lib/types/script-data'

    type SortItem = {
        userString: string
        sortingFunction: (a: ScriptData, b: ScriptData) => number
        icon: Function
    }
    const sortings = ['alphabetical', 'recent'] as const
    type Sorting = typeof sortings[number]
    const sorts: Record<Sorting, SortItem> = {
        alphabetical: {
            userString: 'Sort alphabetically',
            sortingFunction: (a, b) => a.name.localeCompare(b.name),
            icon: ArrowDown,
        },
        recent: {
            userString: 'Sort by most recent',
            sortingFunction: (a, b) => {
                let dateA = new Date(a.date)
                let dateB = new Date(b.date)
                if (dateA.getTime() === dateB.getTime()) {
                    return a.name.localeCompare(b.name)
                }
                return dateB.getTime() - dateA.getTime()
            },
            icon: Clock,
        },
    }
    let currentSorting: Sorting = 'alphabetical'

    const scripts: ScriptData[] = scriptData
    const search = new Search('name')
    search.addIndex('name')
    search.addIndex('shortDescription')
    search.addIndex(['author', 'name'])
    search.addIndex('categories')

    const allIndexes = new Set<string>()

    const normalizeName = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036F]/gu, '')
    scripts.forEach((script) => {
        search.addDocument({
            ...script,
            name: normalizeName(script.name),
        })
        allIndexes.add(script.fileName)
    })

    let searchValue = $page.query.get('search') ?? ''
    let shouldUpdateUrlQuery = false
    const handleSearchChange = (event: TextInputChangeEvent) => {
        searchValue = event.detail.parsedValue
        shouldUpdateUrlQuery = true
    }

    let sortedScripts = [...scripts].sort(sorts[currentSorting].sortingFunction)
    $: sortedScripts = [...scripts].sort(sorts[currentSorting].sortingFunction)
    type DisplayedDocuments = { items: Set<string>; first: string; last: string }
    const searchCache: Record<
        string,
        {
            [key: string]: DisplayedDocuments
        }
    > = {
        [currentSorting]: {
            '': {
                items: new Set(sortedScripts.map((script) => script.fileName)),
                first: sortedScripts[0].fileName,
                last: sortedScripts[sortedScripts.length - 1].fileName,
            },
        },
    }

    let displayedDocuments: DisplayedDocuments = searchCache[currentSorting]['']
    $: {
        const currentSearch = searchValue.trim()
        if (currentSorting in searchCache && currentSearch in searchCache[currentSorting]) {
            displayedDocuments = searchCache[currentSorting][currentSearch]
        } else {
            const results =
                currentSearch === '' ? [...scripts] : (search.search(currentSearch) as ScriptData[])
            results.sort(sorts[currentSorting].sortingFunction)
            displayedDocuments = {
                items: new Set(results.map((script) => script.fileName)),
                first: '',
                last: '',
            }
            for (const script of sortedScripts) {
                if (!displayedDocuments.items.has(script.fileName)) {
                    continue
                }
                if (displayedDocuments.first === '') {
                    displayedDocuments.first = script.fileName
                }
                displayedDocuments.last = script.fileName
            }
            if (!(currentSorting in searchCache)) {
                searchCache[currentSorting] = {}
            }
            searchCache[currentSorting][currentSearch] = displayedDocuments
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
    canonicalUrl="{`https://www.finalelua.com${$page.path}`}"
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
    <div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
        <div class="w-full">
            <SearchInput
                on:change="{handleSearchChange}"
                placeholder="Search…"
                defaultValue="{searchValue}"
                helpText="Found {formatNumber(
                    displayedDocuments.items.size
                )} script{displayedDocuments.items.size === 1 ? '' : 's'}"
            />
        </div>

        <div class="sm:w-96">
            <Select
                aria-label="Sort"
                prefix="{sorts[currentSorting].icon}"
                on:change="{(event) => (currentSorting = event.detail)}"
            >
                {#each sortings as sorting}
                    <option value="{sorting}">
                        {sorts[sorting].userString}
                    </option>
                {/each}
            </Select>
        </div>
    </div>
    <Spacer />
    <Container>
        {#each sortedScripts as item}
            <Script
                data="{item}"
                show="{displayedDocuments.items.has(item.fileName)}"
                first="{item.fileName === displayedDocuments.first}"
                last="{item.fileName === displayedDocuments.last}"
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
