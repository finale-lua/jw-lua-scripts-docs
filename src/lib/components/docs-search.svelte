<script lang="ts">
    import SearchInput from '@nick-mazuk/ui-svelte/src/form/search-input/search-input.svelte'

    // import '../lib/stork'

    let value = ''

    type Excerpt = {
        text: string
        /* eslint-disable camelcase -- 3rd party api */
        highlight_ranges: { beginning: number; end: number }[]
        internal_annotations: []
        /* eslint-enable camelcase -- 3rd party api */
        score: number
        fields: Record<string, unknown>
    }
    type Result = {
        entry: { url: string; title: string }
        excerpts: Excerpt[]
    }

    let results: Result[] = []
    let resultsMap: { [title: string]: Result } = {}
    let isLoading = false
    let hideOptions = true
    $: {
        if (typeof window !== 'undefined' && value) {
            ;({ results } = (window as any).stork.search('docs', value))
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
        ;(window as any).stork.initialize('/stork.wasm')
        ;(window as any).stork.downloadIndex('docs', '/stork.st')
    }
</script>

<SearchInput
    isLoading="{isLoading}"
    hideOptions="{hideOptions}"
    on:focus="{handleFocus}"
    bind:value
    options="{results.map((result) => result.entry.title)}"
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

<svelte:head>
    <script src="https://files.stork-search.net/stork.js" defer></script>
</svelte:head>
