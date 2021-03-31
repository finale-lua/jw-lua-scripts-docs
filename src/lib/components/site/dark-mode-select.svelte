<script lang="ts">
    import Sun from '@nick-mazuk/ui-svelte/src/elements/icon/sun.svelte'
    import Moon from '@nick-mazuk/ui-svelte/src/elements/icon/moon.svelte'
    import Monitor from '@nick-mazuk/ui-svelte/src/elements/icon/monitor.svelte'

    import Select from '../select.svelte'
    import { darkMode } from '../../stores/dark-mode'
</script>

<Select on:change="{(event) => darkMode.set(event.detail.toLowerCase())}">
    <svelte:fragment slot="prefix">
        {#if $darkMode === 'light'}
            <Sun />
        {:else if $darkMode === 'dark'}
            <Moon />
        {:else}
            <Monitor />
        {/if}
    </svelte:fragment>
    <option>System</option>
    <option>Light</option>
    <option>Dark</option>
</Select>
