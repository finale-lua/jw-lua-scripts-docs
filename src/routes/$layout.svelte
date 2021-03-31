<script>
    import '@nick-mazuk/ui-config/colors.css'
    import '@nick-mazuk/ui-config/styles.css'
    import HeaderBrand from '@nick-mazuk/ui-svelte/src/layouts/header/header-brand/header-brand.svelte'
    import Header from '@nick-mazuk/ui-svelte/src/layouts/header/header.svelte'
    import HeaderLink from '@nick-mazuk/ui-svelte/src/layouts/header/header-link/header-link.svelte'
    import HeaderItemWrapper from '@nick-mazuk/ui-svelte/src/layouts/header/header-item-wrapper/header-item-wrapper.svelte'
    import Moon from '@nick-mazuk/ui-svelte/src/elements/icon/moon.svelte'
    import Sun from '@nick-mazuk/ui-svelte/src/elements/icon/sun.svelte'
    import { darkMode } from '../lib/stores/dark-mode'
</script>

<Header sticky>
    <svelte:fragment slot="left">
        <HeaderBrand text="JW Lua Scripts" />
    </svelte:fragment>
    <svelte:fragment slot="right">
        <HeaderLink href="/library" breakpoint="none">Library Docs</HeaderLink>
        <HeaderItemWrapper breakpoint="none">
            <div class="flex items-center">
                <button
                    class="rounded -m-1.5 p-1.5 dark:hover:bg-gray-100 dark:focus:bg-gray-100 focus:outline-none hover:bg-gray-50 focus:bg-gray-50"
                    on:click="{darkMode.toggleAndSave}"
                >
                    {#if $darkMode}
                        <Sun size="{5}" />
                    {:else}
                        <Moon size="{5}" />
                    {/if}
                </button>
            </div>
        </HeaderItemWrapper>
    </svelte:fragment>
</Header>
<slot />
