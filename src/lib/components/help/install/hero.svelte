<script lang="ts">
    import Select from '@nick-mazuk/ui-svelte/src/form/inputs/select/select.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
    import type { FinaleVersion, OS, PluginVersion } from '../../../lib/install-data'
    import { finaleName, finaleVersions, os, pluginVersions } from '../../../lib/install-data'

    export let finaleVersion: FinaleVersion | undefined = undefined
    export let pluginVersion: PluginVersion | undefined = undefined
    export let operatingSystem: OS | undefined = undefined
</script>

<h1 class="h3">Plugin Installation</h1>

<Spacer />

{#if operatingSystem || finaleVersion || pluginVersion}
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-3">
        {#if operatingSystem}
            <Select
                defaultValue="{operatingSystem}"
                on:change="{(event) => (operatingSystem = event.detail)}"
            >
                {#each os as version}
                    <option value="{version}">{version}</option>
                {/each}
            </Select>
        {/if}
        {#if finaleVersion}
            <Select
                defaultValue="{finaleVersion}"
                on:change="{(event) => (finaleVersion = event.detail)}"
            >
                {#each finaleVersions as version}
                    <option value="{version}">{finaleName[version].full}</option>
                {/each}
            </Select>
        {/if}
        {#if pluginVersion}
            <Select
                defaultValue="{pluginVersion}"
                on:change="{(event) => (pluginVersion = event.detail)}"
            >
                {#each pluginVersions as version}
                    <option value="{version}">{version}</option>
                {/each}
            </Select>
        {/if}
    </div>
    <Spacer />
{/if}
