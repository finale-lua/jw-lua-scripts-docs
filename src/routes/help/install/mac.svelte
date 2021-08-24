<script lang="ts">
    import { page } from '$app/stores'

    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
    import AccordionGroup from '@nick-mazuk/ui-svelte/src/components/accordion/accordion-group/accordion-group.svelte'
    import Accordion from '@nick-mazuk/ui-svelte/src/components/accordion/accordion.svelte'

    import luaLogo from '$lib/assets/images/lua-logo.png'
</script>

<Seo
    title="macOS Installation"
    siteName="JW Lua Scripts"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://jw-lua-scripts-docs.vercel.app/${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://jw-lua-scripts-docs.vercel.app${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<main id="main-content" class="my-12 wrapper !max-w-2xl">
    <h1 class="h3">macOS installation</h1>
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
                    Finale. If these links don't work, you can find the
                    <a href="http://finaletips.nu/index.php/download/category/28-beta-version">
                        original downloads here
                    </a>.
                    <ul>
                        <li>
                            <a
                                href="http://finaletips.nu/index.php/download/category/28-beta-version?download=234:jw-lua-beta-v0-54-for-64-bit-mac"
                                download
                            >
                                Finale v25 and later
                            </a> (recommended)
                        </li>
                        <li>
                            <a
                                href="http://finaletips.nu/index.php/download/category/28-beta-version?download=176:jw-lua-beta-v0-54-for-mac"
                                download
                            >
                                Finale v2014.5 and earlier
                            </a> (not compatible with all scripts)
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Double-click the downloaded file to unzip it</strong>. This will create
                    a
                    <code>.bundle</code> file. For Finale v25 or later, this will be
                    <code>jwlua64.bundle</code>, and for v2014.5 or earlier this will be
                    <code>jwlua.bundle</code> Unlike installing most programs, you will not need to run
                    or open this file. Instead, we just need to move it into your Finale plug-ins folder
                    (see next steps).
                </li>
                <li>
                    <strong>Find your Finale plug-ins folder</strong> (If you’re not sure where it
                    is, you can always check in the Folders section of your Finale > Preferences >
                    Folders). The default locations for various versions are:
                    <ul>
                        <li>
                            Finale v26:
                            <code> /Library/Application Support/MakeMusic/Finale 26/Plug-ins </code>
                        </li>
                        <li>
                            Finale v25:
                            <code> /Library/Application Support/MakeMusic/Finale/Plug-ins </code>
                        </li>
                        <li>
                            Finale 2014.5:
                            <code>
                                /Library/Application Support/MakeMusic/Finale 2014.5/Plug-ins
                            </code>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>In that folder, create a new <code>JW Lua</code> folder</strong>.
                </li>
                <li>
                    <strong>Move the <code>.bundle</code> file into the newly created folder</strong
                    > and restart Finale.
                </li>
            </ol>
            <p>
                If you're on macOS Mojave or earlier, you're all set! If not, you'll likely run into
                the "unverified developer" error. If so, see the next section.
            </p>
        </Accordion>
        <Accordion title="Unverified developer error">
            <p>
                If you're on macOS Catalina or later, you'll run into an issue when you restart
                Finale:
                <code
                    >"jwlua64.bundle" cannot be opened because the developer cannot be verified.
                </code>
                Here's how to fix it, though if you want more details on why this happens, checkout this
                video:
                <a href="https://youtu.be/iq3Xcpsewhk" target="_blank" rel="noreferrer">
                    https://youtu.be/iq3Xcpsewhk
                </a>
            </p>
            <ol>
                <li>
                    <strong>Press cancel</strong> when you get that error message.
                </li>
                <li>
                    <strong>Open System Preferences, then Security & Privacy</strong> and go to the general
                    pane.
                </li>
                <li>
                    <strong>Click "allow anyway"</strong> next to
                    <code>
                        "jwlua64.bundle" was blocked from use because it is not from a verified
                        developer
                    </code>. Authenticate with your admin username/password if necessary.
                </li>
                <li>
                    <strong>Restart Finale and click "open"</strong> when you get the dialog
                    <code>
                        macOS could not verify the developer of "jwlua64.bundle". Are you sure you
                        want to open it?
                    </code>
                </li>
            </ol>
        </Accordion>
        <Accordion title="Installing scripts">
            <p>Once you've installed JW Lua, you can now install and run the JW Lua scripts.</p>
            <ol>
                <li>
                    <strong>Find the script you want and click "download"</strong>. This will
                    download a <code>.lua</code> file. You can search for and find scripts on the
                    <a sveltekit:prefetch href="/">homepage</a> of this site.
                </li>
                <li>
                    <strong>Save the downloaded script</strong>. You can save it anywhere on your
                    computer, though make sure you can keep it there permenantly. The two most
                    common places to save these JW Lua scripts are in the same folder as the
                    <code>.bundle</code> file from installing JW Lua, or a cloud-synced folder (like
                    for Dropbox or Google Drive).
                </li>
                <li>
                    <strong>Open Finale and open a document</strong>. The plug-in menu does not
                    appear unlesss a document is opened.
                </li>
                <li>
                    <strong>Go to Plug-ins > JW Lua > JW Lua…</strong> to open the JW Lua plug-in.
                </li>
                <li>
                    <strong>
                        Go to the manager tab and click on the <code>[menu]</code> plug-in group.
                    </strong>
                </li>
                <li>
                    <strong>Click "open" next to the Plug-in Groups section</strong>. Note that
                    there are two "open" buttons. You want to click the top one.
                </li>
                <li>
                    <strong>Find the saved <code>.lua</code> and select it</strong>. Click "open",
                    and the file should now be listed under Items in Group.
                </li>
                <li>
                    <strong>Close JW Lua</strong>. You may also get a warning that the changes will
                    not be reflected until you restart Finale, you can close this warning.
                </li>
                <li>
                    <strong>Restart Finale and view the new script under Plug-ins > JW Lua</strong>.
                    You can now run this script!
                </li>
            </ol>
        </Accordion>
    </AccordionGroup>
</main>
