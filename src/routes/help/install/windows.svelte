<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import AccordionGroup from '@nick-mazuk/ui-svelte/src/components/accordion/accordion-group/accordion-group.svelte'
    import Accordion from '@nick-mazuk/ui-svelte/src/components/accordion/accordion.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
</script>

<Seo
    title="Windows Installation"
    siteName="Finale Lua"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://finalelua.com/${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://finalelua.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<main id="main-content" class="my-12 wrapper !max-w-2xl">
    <h1 class="h3">Windows installation</h1>
    <Spacer />
    <AccordionGroup>
        <Accordion title="Installing JW Lua" defaultExpanded>
            <p>
                To use these JW Lua scripts, you first need to install JW Lua. Luckily, this is a
                one-time process.
            </p>
            <ol>
                <li>
                    <strong>Download the most recent version of JW Lua</strong> for your version of
                    Finale.
                    <ul>
                        <li>
                            <a href="/jw-lua-downloads/jw-lua-windows-64.zip" download>
                                Finale v25 and later
                            </a> (recommended)
                        </li>
                        <li>
                            <a href="/jw-lua-downloads/jw-lua-windows.zip" download>
                                Finale v2014.5 and earlier
                            </a> (not compatible with all scripts)
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Double-click the downloaded file to unzip it</strong>. This will create
                    three files. Unlike installing most programs, you will not need to run or open
                    these files file. Instead, we just need to move them into your Finale plug-ins
                    folder (see next steps).
                </li>
                <li>
                    <strong>Find your Finale plug-ins folder</strong> (If you’re not sure where it is,
                    you can always check in the Folders section of your Finale > Preferences > Folders).
                </li>
                <li>
                    <strong>In that folder, create a new <code>JW Lua</code> folder</strong>.
                </li>
                <li>
                    <strong>Move the unzipped files into the newly created folder</strong> and restart
                    Finale.
                </li>
            </ol>
        </Accordion>
    </AccordionGroup>
</main>
