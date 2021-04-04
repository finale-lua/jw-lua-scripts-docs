<script lang="ts">
    type Result = {
        entry: { url: string; title: string }
        excerpts: {
            text: string
            highlight_ranges: { beginning: number; end: number }[]
            score: number
            internal_annotations: []
            fields: {}
        }[]
    }

    let results: Result[] = []
    const downloadStork = () => {
        window.stork.initialize('/stork.wasm')
        window.stork.downloadIndex('docs', '/stork.st')
        console.log(stork.search)
    }

    const handleChange: svelte.JSX.FormEventHandler<HTMLInputElement> = (event) => {
        results = window.stork.search('docs', event.currentTarget.value).results
    }

    const hello = {
        results: [
            {
                entry: { url: '/docs/library/configuration', title: 'Configuration', fields: {} },
                excerpts: [
                    {
                        text:
                            '| string | the file name of the config file (which will be prepended with the',
                        highlight_ranges: [{ beginning: 32, end: 38 }],
                        score: 125,
                        internal_annotations: [],
                        fields: {},
                    },
                    {
                        text: 'Configuration Author: Robert Patterson Date: March 5, 2021',
                        highlight_ranges: [{ beginning: 1, end: 14 }],
                        score: 118,
                        internal_annotations: [],
                        fields: {},
                    },
                    {
                        text:
                            'embedded within tables is not supported. get_parameters get_parameters configuration.get_parameters(file_name, parameter_list) | Input | Type | Description',
                        highlight_ranges: [{ beginning: 71, end: 109 }],
                        score: 93,
                        internal_annotations: [],
                        fields: {},
                    },
                ],
                title_highlight_ranges: [{ beginning: 0, end: 13 }],
                score: 200,
            },
        ],
        total_hit_count: 1,
        url_prefix: '',
    }
</script>

<!-- data-stork="docs" -->
<div class="flex items-center w-full relative">
    <input
        type="text"
        class="text-sm bg-transparent w-full rounded text-gray-900 border-gray-300 hover:border-gray focus:border-primary focus:ring-primary transition-colors"
        on:input="{handleChange}"
        on:focus|once="{downloadStork}"
    />
    <div class="absolute bg-background border rounded-lg w-96 h-16 top-14 shadow-lg">
        {#each results as result}
            <a sveltekit:prefetch href="{result.entry.url}"><p>{result.entry.title}</p></a>
        {/each}
    </div>
</div>

<svelte:head>
    <script src="https://files.stork-search.net/stork.js" defer></script>
</svelte:head>
