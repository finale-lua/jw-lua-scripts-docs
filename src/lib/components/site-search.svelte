<script lang="ts">
    import SearchInput from '@nick-mazuk/ui-svelte/src/form/search-input/search-input.svelte'
    import HeaderItemWrapper from '@nick-mazuk/ui-svelte/src/layouts/header/header-item-wrapper/header-item-wrapper.svelte'

    let value = ''

    type Excerpt = {
        text: string
        highlight_ranges: { beginning: number; end: number }[]
        score: number
        internal_annotations: []
        fields: {}
    }
    type Result = {
        entry: { url: string; title: string }
        excerpts: Excerpt[]
    }

    let results: Result[] = []
    let resultsMap: { [title: string]: Result }
    let isLoading = false
    let hideOptions = true
    $: {
        if (typeof window !== 'undefined' && value) {
            results = window.stork.search('docs', value).results
            resultsMap = {}
            results.forEach((result) => {
                resultsMap[result.entry.title] = result
            })
        } else {
            results = []
            resultsMap = {}
        }
        isLoading = value.length < 3
        hideOptions = value.length === 0
    }
    const handleFocus = () => {
        window.stork.initialize('/stork.wasm')
        window.stork.downloadIndex('docs', '/stork.st')
    }
</script>

<HeaderItemWrapper breakpoint="sm">
    <div class="flex items-center flex-shrink">
        <SearchInput
            isLoading="{isLoading}"
            hideOptions="{hideOptions}"
            on:focus="{handleFocus}"
            bind:value
            options="{results.map((result) => result.entry.title)}"
            width="{72}"
        >
            <a
                sveltekit:prefetch
                slot="option"
                href="{resultsMap[option].entry.url}"
                class="block rounded px-3 py-2 group text-left text-sm hover:bg-gray-50"
                let:option
            >
                {option}
            </a>
        </SearchInput>
    </div>
</HeaderItemWrapper>

<svelte:head>
    <script src="https://files.stork-search.net/stork.js" defer></script>
</svelte:head>
