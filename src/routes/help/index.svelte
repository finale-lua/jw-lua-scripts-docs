<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import HelpOption from '$lib/components/help/help-option.svelte'
    import Bug from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/bug.svelte'
    import Download from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/download.svelte'
    import HandsHelping from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/hands-helping.svelte'
    import LightbulbOn from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/lightbulb-on.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
</script>

<Seo
    title="Help"
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

<main id="main-content">
    <div class="wrapper !max-w-2xl my-12">
        <h1 class="h4 text-center">What do you need help with?</h1>
        <Spacer />
        <div class="grid grid-cols-2 gap-6">
            <HelpOption name="Install plugin" href="/help/install" icon="{Download}" />
            <HelpOption name="Install scripts" href="/help/install/script" icon="{Download}" />
            <HelpOption
                name="Request scripts"
                href="https://github.com/finale-lua/lua-scripts/issues/new/choose"
                icon="{LightbulbOn}"
            />
            <HelpOption name="Report bug" href="/help/issue" icon="{Bug}" />
            <HelpOption name="Contribute" href="/docs/getting-started" icon="{HandsHelping}" />
        </div>
    </div>
</main>
