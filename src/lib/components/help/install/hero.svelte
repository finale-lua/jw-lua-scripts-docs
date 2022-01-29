<script lang="ts">
    import Select from '@nick-mazuk/ui-svelte/src/form/inputs/select/select.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
    import type { FinaleVersion, OS, PluginVersion } from '../../../lib/install-data'
    import { finaleName, finaleVersions, os, pluginVersions } from '../../../lib/install-data'

    export let finaleVersion: FinaleVersion | undefined = undefined
    export let pluginVersion: PluginVersion | undefined = undefined
    export let operatingSystem: OS | undefined = undefined
</script>

<h1 class="h3">Installation</h1>

{#if finaleVersion && pluginVersion && operatingSystem}
    <Spacer />
    <p class="text-gray text-lg">
        {pluginVersion} for {finaleName[finaleVersion].short} on {operatingSystem}
    </p>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-3">
        <Select
            defaultValue="{pluginVersion}"
            on:change="{(event) => (pluginVersion = event.detail)}"
        >
            {#each pluginVersions as version}
                <option value="{version}">{version}</option>
            {/each}
        </Select>
        <Select
            defaultValue="{finaleVersion}"
            on:change="{(event) => (finaleVersion = event.detail)}"
        >
            {#each finaleVersions as version}
                <option value="{version}">{finaleName[version].full}</option>
            {/each}
        </Select>
        <Select
            defaultValue="{operatingSystem}"
            on:change="{(event) => (operatingSystem = event.detail)}"
        >
            {#each os as version}
                <option value="{version}">{version}</option>
            {/each}
        </Select>
    </div>
{/if}
<Spacer />
