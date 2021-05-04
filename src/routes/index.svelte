<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import Button from '@nick-mazuk/ui-svelte/src/elements/button/button.svelte'
    import ChevronRight from '@nick-mazuk/ui-svelte/src/elements/icon/chevron-right.svelte'
</script>

<main class="wrapper my-16">
    <div class="max-w-md mx-auto">
        <h1 class="h1 text-center">JW Lua Scripts</h1>
        <p class="text-center text-lg balance mt-4">
            Improving Finale workflow through prebuilt scripts. This site is still a work in
            progress, but for now, if you're a developer, <a
                sveltekit:prefetch
                class="link"
                href="/docs/getting-started">take a look at the docs</a
            >.
        </p>
        <div class="flex items-center justify-center mt-8">
            <Button size="large" href="/docs/getting-started">
                Get started
                <ChevronRight slot="suffix" />
            </Button>
        </div>
    </div>
</main>
