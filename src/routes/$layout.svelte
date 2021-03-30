<script>
    import '@nick-mazuk/ui-config/colors.css'
    import '@nick-mazuk/ui-config/styles.css'
    import HeaderBrand from '../components/header-brand.svelte'
    import Header from '../components/header.svelte'
    import HeaderLink from '../components/header-link.svelte'
</script>

<Header sticky>
    <svelte:fragment slot="left">
        <HeaderBrand text="JW Lua Scripts" />
    </svelte:fragment>
    <svelte:fragment slot="right">
        <HeaderLink href="/library" breakpoint="none">Library Docs</HeaderLink>
    </svelte:fragment>
</Header>
<slot />
