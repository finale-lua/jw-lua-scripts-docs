<script>
    import '@nick-mazuk/ui-config/colors.css'
    import '@nick-mazuk/ui-config/styles.css'
    import HeaderBrand from '@nick-mazuk/ui-svelte/src/layouts/header/header-brand/header-brand.svelte'
    import Header from '@nick-mazuk/ui-svelte/src/layouts/header/header.svelte'
    import HeaderLink from '@nick-mazuk/ui-svelte/src/layouts/header/header-link/header-link.svelte'
    import HeaderItemWrapper from '@nick-mazuk/ui-svelte/src/layouts/header/header-item-wrapper/header-item-wrapper.svelte'
    import DarkModeSelect from '../lib/components/site/dark-mode-select.svelte'
</script>

<Header sticky>
    <svelte:fragment slot="left">
        <HeaderBrand text="JW Lua Scripts" />
    </svelte:fragment>
    <svelte:fragment slot="right">
        <HeaderLink href="/library" breakpoint="none">Library Docs</HeaderLink>
        <HeaderItemWrapper breakpoint="none">
            <div class="w-32 flex items-center">
                <DarkModeSelect />
            </div>
        </HeaderItemWrapper>
    </svelte:fragment>
</Header>
<slot />
