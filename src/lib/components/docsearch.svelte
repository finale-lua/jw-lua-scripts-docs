<script lang="ts">
    import '@docsearch/css'
    import docsearch from '@docsearch/js'

    export let show: boolean

    if (typeof window !== 'undefined') {
        docsearch({
            appId: 'BIM0PZM0GH',
            apiKey: '0aa4fa11be5e4cda679c7aba0789cac0',
            indexName: 'finalelua',
            container: '#docsearch',
            placeholder: 'Search developer docs',
            translations: {
                button: {
                    buttonText: 'Search developer docs',
                    buttonAriaLabel: 'Search developer docs',
                },
            },
            debug: true,
        })
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://BIM0PZM0GH-dsn.algolia.net" crossorigin />
</svelte:head>

<div><div id="docsearch" class:hidden="{!show}"></div></div>

<!-- <style>
    :global(:root) {
        --docsearch-primary-color: rgb(--c-primary);
        --docsearch-text-color: green;
        --docsearch-container-background: rgb(--c-foreground, 0.5);
    }
</style> -->
