<script>
    import '@nick-mazuk/ui-config/colors.css'
    import '@nick-mazuk/ui-config/styles.css'
    import HeaderBrand from '@nick-mazuk/ui-svelte/src/layouts/header/header-brand/header-brand.svelte'
    import Header from '@nick-mazuk/ui-svelte/src/layouts/header/header.svelte'
    import HeaderLink from '@nick-mazuk/ui-svelte/src/layouts/header/header-link/header-link.svelte'
    import Github from '@nick-mazuk/ui-svelte/src/elements/icon/github.svelte'
    import LoadingProgressIndicator from '@nick-mazuk/ui-svelte/src/elements/loading-progress-indicator/loading-progress-indicator.svelte'
    import Footer from '@nick-mazuk/ui-svelte/src/layouts/footer/footer.svelte'
    import FooterSocialLink from '@nick-mazuk/ui-svelte/src/layouts/footer/footer-social-link/footer-social-link.svelte'
    import DarkModeSelect from '../lib/components/site/dark-mode-select.svelte'

    const githubRepoUrl = 'https://github.com/Nick-Mazuk/jw-lua-scripts'
</script>

<LoadingProgressIndicator />

<Header sticky>
    <svelte:fragment slot="left">
        <HeaderBrand text="JW Lua Scripts" />
    </svelte:fragment>
    <svelte:fragment slot="right">
        <HeaderLink href="/docs/getting-started" breakpoint="none">Docs</HeaderLink>
        <HeaderLink href="{githubRepoUrl}" breakpoint="none"><Github /></HeaderLink>
    </svelte:fragment>
</Header>
<slot />

<Footer>
    <svelte:fragment slot="copyright">
        ©{new Date().getFullYear()} Nick Mazuk.
    </svelte:fragment>
    <svelte:fragment slot="social-links">
        <FooterSocialLink href="{githubRepoUrl}">
            <Github />
        </FooterSocialLink>
    </svelte:fragment>
    <svelte:fragment slot="theme-toggle">
        <DarkModeSelect />
    </svelte:fragment>
</Footer>
