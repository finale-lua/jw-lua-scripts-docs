<script lang="ts">
    import { page } from '$app/stores'

    import Container from '@nick-mazuk/ui-svelte/src/utilities/container/container.svelte'
    import Apple from '@nick-mazuk/ui-svelte/src/elements/icon/apple.svelte'
    import Windows from '@nick-mazuk/ui-svelte/src/elements/icon/windows.svelte'

    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    import luaLogo from '$lib/assets/images/lua-logo.gif'
</script>

<Seo
    title="Install"
    siteName="JW Lua Scripts"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://${$page.host}/${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://${$page.host}${luaLogo}`,
            width: 128,
            height: 128,
        },
    }}"
/>

<main id="main-content">
    <div class="wrapper !max-w-2xl my-6">
        <h1 class="h4 text-center">Using JW Lua scripts</h1>
        <Spacer y="{0.5}" />
        <p class="text-center">Select your operating system</p>
        <Spacer />
        <div class="grid grid-cols-2 gap-6">
            <Container
                padding="{8}"
                href="/help/install/mac"
                class="flex flex-col items-center space-y-6"
            >
                <Apple size="{12}" color="--c-gray" />
                <p class="text-lg">macOS</p>
            </Container>
            <Container
                padding="{8}"
                href="/help/install/windows"
                class="flex flex-col items-center space-y-6"
            >
                <Windows size="{12}" color="--c-gray" />
                <p class="text-lg">Windows</p>
            </Container>
        </div>
    </div>
</main>
