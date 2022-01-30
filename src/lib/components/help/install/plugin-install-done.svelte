<script lang="ts">
    import type { PluginVersion } from '$lib/lib/install-data'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    export let pluginVersion: PluginVersion
</script>

<Spacer />
<h2 class="h5">You're all set!</h2>
<Spacer />

<div class="prose !text-gray-700">
    <p class="text-gray-700">
        You can now use {pluginVersion} to run Lua scripts in Finale. You're well on your way to supercharging
        your Finale workflow!
    </p>
    <p class="text-gray-700">
        Now, <a sveltekit:prefetch href="/scripts">explore all the scripts you can use.</a>
        If you need help installing those scripts,
        <a sveltekit:prefetch href="/help/install/script">check out those help docs</a>.
    </p>
</div>
