<script lang="ts">
    import Container from '@nick-mazuk/ui-svelte/src/utilities/container/container.svelte'
    import Download from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/download.svelte'
    import Bug from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/bug.svelte'
    import HandsHelping from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/hands-helping.svelte'
    import LightbulbOn from '@nick-mazuk/ui-svelte/src/elements/marketing-icon/lightbulb-on.svelte'

    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
</script>

<Seo title="Help" siteName="JW Lua Scripts" />

<main id="main-content">
    <div class="wrapper !max-w-2xl my-12">
        <h1 class="h4 text-center">What do you need help with?</h1>
        <Spacer />
        <div class="grid grid-cols-2 gap-6">
            <Container
                padding="{8}"
                href="/help/install"
                class="flex flex-col items-center space-y-6"
            >
                <Download class="h-12" variant="gray" />
                <p class="text-lg">Install scripts</p>
            </Container>
            <Container
                padding="{8}"
                href="https://github.com/Nick-Mazuk/jw-lua-scripts/issues/new/choose"
                class="flex flex-col items-center space-y-6"
            >
                <LightbulbOn class="h-12" variant="gray" />
                <p class="text-lg">Request script</p>
            </Container>
            <Container
                padding="{8}"
                href="https://github.com/Nick-Mazuk/jw-lua-scripts/issues/new/choose"
                class="flex flex-col items-center space-y-6"
            >
                <Bug class="h-12" variant="gray" />
                <p class="text-lg">Report bug</p>
            </Container>
            <Container
                padding="{8}"
                href="/docs/getting-started"
                class="flex flex-col items-center space-y-6"
            >
                <HandsHelping class="h-12" variant="gray" />
                <p class="text-lg">Contribute</p>
            </Container>
        </div>
    </div>
</main>
