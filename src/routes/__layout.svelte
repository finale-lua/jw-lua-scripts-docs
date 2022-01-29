<script lang="ts">
    import { page } from '$app/stores'
    import ResetItems from '$lib/components/reset-items.svelte'
    import FooterSocialLinkWrapper from '@nick-mazuk/ui-svelte/src/components/footer/footer-social-link-wrapper/footer-social-link-wrapper.svelte'
    import FooterSocialLink from '@nick-mazuk/ui-svelte/src/components/footer/footer-social-link/footer-social-link.svelte'
    import Footer from '@nick-mazuk/ui-svelte/src/components/footer/footer.svelte'
    import HeaderBrand from '@nick-mazuk/ui-svelte/src/components/header/header-brand/header-brand.svelte'
    import HeaderItemWrapper from '@nick-mazuk/ui-svelte/src/components/header/header-item-wrapper/header-item-wrapper.svelte'
    import HeaderLink from '@nick-mazuk/ui-svelte/src/components/header/header-link/header-link.svelte'
    import HeaderMobileLink from '@nick-mazuk/ui-svelte/src/components/header/header-mobile-link/header-mobile-link.svelte'
    import HeaderMobileSubgroup from '@nick-mazuk/ui-svelte/src/components/header/header-mobile-subgroup/header-mobile-subgroup.svelte'
    import Header from '@nick-mazuk/ui-svelte/src/components/header/header.svelte'
    import type { TocItems } from '@nick-mazuk/ui-svelte/src/components/table-of-contents'
    import Button from '@nick-mazuk/ui-svelte/src/elements/button/button.svelte'
    import DarkModeSelect from '@nick-mazuk/ui-svelte/src/elements/dark-mode-select/dark-mode-select.svelte'
    import Facebook from '@nick-mazuk/ui-svelte/src/elements/icon/facebook.svelte'
    import Github from '@nick-mazuk/ui-svelte/src/elements/icon/github.svelte'
    import { libraryPages } from '../lib/lib/library-pages'
    import { darkMode } from '../lib/stores/dark-mode'

    const githubRepoUrl = 'https://github.com/finale-lua/lua-scripts'
    const facebookGroupUrl = 'https://www.facebook.com/groups/742277119576336/'

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
            href: 'https://github.com/finale-lua/lua-scripts/issues/new/choose',
        },
        {
            text: 'Report bug',
            href: 'https://github.com/finale-lua/lua-scripts/issues/new/choose',
        },
        {
            text: 'Contribute',
            href: '/docs/getting-started',
        },
    ]
</script>

<svelte:head>
    <title>Finale Lua</title>
</svelte:head>

<ResetItems />

<Header sticky page="{$page.path}">
    <HeaderBrand text="Finale Lua" slot="left" />
    <svelte:fragment slot="right">
        <HeaderLink href="/help">Help</HeaderLink>
        <HeaderLink href="/docs/getting-started">Developer docs</HeaderLink>
        <HeaderLink href="{githubRepoUrl}"><Github title="Github" size="{6}" /></HeaderLink>
        <HeaderLink href="{facebookGroupUrl}"
            ><Facebook title="Facebook group" size="{6}" /></HeaderLink
        >
        <HeaderItemWrapper>
            <Button size="small" href="/scripts">View scripts</Button>
        </HeaderItemWrapper>
    </svelte:fragment>
    <svelte:fragment slot="mobile">
        <HeaderMobileLink href="/scripts">Scripts</HeaderMobileLink>
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
            <FooterSocialLink href="{githubRepoUrl}" title="GitHub">
                <Github />
            </FooterSocialLink>
            <FooterSocialLink href="{facebookGroupUrl}" title="Facebook group">
                <Facebook />
            </FooterSocialLink>
        </FooterSocialLinkWrapper>
        <DarkModeSelect store="{darkMode}" />
    </svelte:fragment>
</Footer>
