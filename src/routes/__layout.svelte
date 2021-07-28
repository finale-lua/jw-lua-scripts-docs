<script lang="ts">
    import { page } from '$app/stores'

    import ResetItems from '$lib/components/reset-items.svelte'

    import HeaderBrand from '@nick-mazuk/ui-svelte/src/components/header/header-brand/header-brand.svelte'
    import Header from '@nick-mazuk/ui-svelte/src/components/header/header.svelte'
    import HeaderLink from '@nick-mazuk/ui-svelte/src/components/header/header-link/header-link.svelte'
    import HeaderMobileLink from '@nick-mazuk/ui-svelte/src/components/header/header-mobile-link/header-mobile-link.svelte'
    import HeaderMobileSubgroup from '@nick-mazuk/ui-svelte/src/components/header/header-mobile-subgroup/header-mobile-subgroup.svelte'
    import type { TocItems } from '@nick-mazuk/ui-svelte/src/components/table-of-contents'
    import Github from '@nick-mazuk/ui-svelte/src/elements/icon/github.svelte'

    import Footer from '@nick-mazuk/ui-svelte/src/components/footer/footer.svelte'
    import FooterSocialLinkWrapper from '@nick-mazuk/ui-svelte/src/components/footer/footer-social-link-wrapper/footer-social-link-wrapper.svelte'
    import FooterSocialLink from '@nick-mazuk/ui-svelte/src/components/footer/footer-social-link/footer-social-link.svelte'
    import DarkModeSelect from '@nick-mazuk/ui-svelte/src/elements/dark-mode-select/dark-mode-select.svelte'

    import { darkMode } from '../lib/stores/dark-mode'
    import { libraryPages } from '../lib/lib/library-pages'

    const githubRepoUrl = 'https://github.com/Nick-Mazuk/jw-lua-scripts'

    const helpPages: TocItems = [
        {
            text: 'Install scripts',
            href: '/help/install',
            children: [
                {
                    text: 'macOS',
                    href: '/help/install/mac',
                },
                {
                    text: 'Windows',
                    href: '/help/install/windows',
                },
            ],
        },
        {
            text: 'Request script',
            href: 'https://github.com/Nick-Mazuk/jw-lua-scripts/issues/new/choose',
        },
        {
            text: 'Report bug',
            href: 'https://github.com/Nick-Mazuk/jw-lua-scripts/issues/new/choose',
        },
        {
            text: 'Contribute',
            href: '/docs/getting-started',
        },
    ]
</script>

<svelte:head>
    <title>JW Lua Scripts</title>
</svelte:head>

<ResetItems />

<Header sticky page="{$page.path}">
    <HeaderBrand text="JW Lua Scripts" slot="left" />
    <svelte:fragment slot="right">
        <HeaderLink href="/help">Help</HeaderLink>
        <HeaderLink href="/docs/getting-started">Develper docs</HeaderLink>
        <HeaderLink href="{githubRepoUrl}"><Github title="Github" size="{6}" /></HeaderLink>
    </svelte:fragment>
    <svelte:fragment slot="mobile">
        <HeaderMobileSubgroup items="{helpPages}" basePath="/help">
            <HeaderMobileLink href="/help" slot="main">Help</HeaderMobileLink>
        </HeaderMobileSubgroup>
        <HeaderMobileSubgroup items="{libraryPages}" basePath="/docs">
            <HeaderMobileLink href="/docs/getting-started" slot="main">
                Developer docs
            </HeaderMobileLink>
        </HeaderMobileSubgroup>
        <HeaderMobileLink href="{githubRepoUrl}">
            <Github title="Github" size="{6}" />
        </HeaderMobileLink>
    </svelte:fragment>
</Header>
<slot />
<Footer>
    <svelte:fragment slot="subfooter">
        <p>©{new Date().getFullYear()} Nick Mazuk.</p>
        <FooterSocialLinkWrapper>
            <FooterSocialLink href="{githubRepoUrl}" title="Github">
                <Github />
            </FooterSocialLink>
        </FooterSocialLinkWrapper>
        <DarkModeSelect store="{darkMode}" />
    </svelte:fragment>
</Footer>
