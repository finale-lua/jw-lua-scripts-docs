<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Hero from '$lib/components/help/install/hero.svelte'
    import InstallOption from '$lib/components/help/install/install-option.svelte'
    import InstallOptions from '$lib/components/help/install/install-options.svelte'
    import MacOsInstall from '$lib/components/help/install/macos.svelte'
    import PluginInstallDone from '$lib/components/help/install/plugin-install-done.svelte'
    import WindowsInstall from '$lib/components/help/install/windows.svelte'
    import type { FinaleVersion, OS, PluginVersion } from '$lib/lib/install-data'
    import { finaleName, finaleVersions } from '$lib/lib/install-data'
    import { appendQueryParameters } from '@nick-mazuk/lib/esm/url'
    import Button from '@nick-mazuk/ui-svelte/src/elements/button/button.svelte'
    import Apple from '@nick-mazuk/ui-svelte/src/elements/icon/apple.svelte'
    import Windows from '@nick-mazuk/ui-svelte/src/elements/icon/windows.svelte'
    import Note from '@nick-mazuk/ui-svelte/src/elements/note/note.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    let operatingSystem: OS | undefined
    let finaleVersion: FinaleVersion | undefined
    let pluginVersion: PluginVersion | undefined

    let shouldUpdateUrl = false

    if ($page.query.get('os') === 'macOS') operatingSystem = 'macOS'
    if ($page.query.get('os') === 'Windows') operatingSystem = 'Windows'
    if ($page.query.get('finale') === '2014.5') finaleVersion = '2014.5'
    if ($page.query.get('finale') === '25') finaleVersion = '25'
    if ($page.query.get('finale') === '26') finaleVersion = '26'
    if ($page.query.get('plugin') === 'JW Lua') pluginVersion = 'JW Lua'
    if ($page.query.get('plugin') === 'RGP Lua') pluginVersion = 'RGP Lua'

    $: if (typeof window !== 'undefined' && shouldUpdateUrl) {
        let url = '/help/install'
        const params: [string, string][] = []
        if (operatingSystem) params.push(['os', operatingSystem])
        if (finaleVersion) params.push(['finale', finaleVersion])
        if (pluginVersion) params.push(['plugin', pluginVersion])
        appendQueryParameters(url, params)
        window.history.replaceState(null, '', appendQueryParameters(url, params))
    }

    shouldUpdateUrl = true
</script>

<Seo
    title="macOS Installation"
    siteName="Finale Lua"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://finalelua.com/${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://finalelua.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<main id="main-content" class="my-12 wrapper !max-w-2xl">
    <Hero bind:operatingSystem bind:finaleVersion bind:pluginVersion />
    {#if typeof operatingSystem === 'undefined'}
        <InstallOptions title="Select your operating system">
            <InstallOption
                name="macOS"
                icon="{Apple}"
                on:click="{() => (operatingSystem = 'macOS')}"
            />
            <InstallOption
                name="Windows"
                icon="{Windows}"
                on:click="{() => (operatingSystem = 'Windows')}"
            />
        </InstallOptions>
    {:else if typeof finaleVersion === 'undefined'}
        <InstallOptions title="Select your Finale version">
            {#each finaleVersions as version}
                <InstallOption
                    name="{finaleName[version].full}"
                    on:click="{() => {
                        finaleVersion = version
                        if (version === '2014.5') {
                            pluginVersion = 'JW Lua'
                        }
                    }}"
                />
            {/each}
        </InstallOptions>
    {:else if typeof pluginVersion === 'undefined'}
        <InstallOptions title="Select your plugin version">
            <InstallOption
                name="RGP Lua (recommended)"
                on:click="{() => (pluginVersion = 'RGP Lua')}"
            />
            <InstallOption name="JW Lua" on:click="{() => (pluginVersion = 'JW Lua')}" />
        </InstallOptions>
        <Spacer />
        <Note>
            <span class="font-bold">
                Choose RGP Lua unless you have a specific reason to use JW Lua.
            </span>
            Use JW Lua if you're using {finaleName['2014.5'].full}, or a developer on Windows
            wanting a slightly better experience. Otherwise, choose RGP Lua.
        </Note>
    {:else if finaleVersion === '2014.5' && pluginVersion === 'RGP Lua'}
        <p>RGP Lua is not supported on {finaleName[finaleVersion].full}.</p>
        <Spacer />
        <Button variant="primary" on:click="{() => (pluginVersion = 'JW Lua')}">
            Choose JW Lua instead
        </Button>
    {:else if operatingSystem === 'macOS'}
        <MacOsInstall bind:finaleVersion bind:pluginVersion />
        <PluginInstallDone pluginVersion="{pluginVersion}" />
    {:else}
        <WindowsInstall bind:finaleVersion bind:pluginVersion />
        <PluginInstallDone pluginVersion="{pluginVersion}" />
    {/if}
</main>
