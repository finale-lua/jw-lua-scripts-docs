<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import YouTubeVideo from '@nick-mazuk/ui-svelte/src/components/youtube-video/youtube-video.svelte'
    import Note from '@nick-mazuk/ui-svelte/src/elements/note/note.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
</script>

<Seo
    title="Script installation"
    siteName="Finale Lua"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://www.finalelua.com${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://finalelua.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<main id="main-content" class="my-12 wrapper !max-w-2xl">
    <h1 class="h3">Script installation</h1>
    <Spacer />
    <Note>
        Before installing a Lua script, make sure you've
        <a sveltekit:prefetch href="/help/install" class="link">
            installed either RGP Lua or JW Lua.
        </a>
    </Note>
    <Spacer />

    <div class="prose !text-gray-700">
        <ol>
            <li>
                <strong>Find the script you want and click "download"</strong>
                <br />
                This will download a
                <code>.lua</code>
                file. You can search for and find scripts on the
                <a sveltekit:prefetch href="/scripts">scripts</a> page of this site.
            </li>
            <li>
                <strong>Save the downloaded script</strong>
                <br />
                You can save it anywhere on your computer, though make sure you can keep it there permenantly.
                Two common places to save these are in the same folder you installed the plugin,
                or in a cloud-synced folder (like for Dropbox or Google Drive).
            </li>
            <li>
                <strong>Open Finale and open a document</strong>
                <br />
                The plug-in menu does not appear unlesss a document is opened.
            </li>
            <li>
                <strong>Open the plugin</strong>
                <br />
                For RGP Lua, go to
                <code>Plug-ins > Lua > RGP Lua…</code>. For JW Lua, to to
                <code>Plug-ins > Lua > JW Lua…</code>. (Assuming that when you installed 
                RGP/JW Lua, you used a folder called <code>Lua</code>.)
            </li>
            <li>
                <strong>For RGP Lua</strong>
                <br />
                Click the <code>Add</code> button and then the <code>Select File…</code>
                button to add an individual Lua script.
            </li>
            <li>
                <strong>For JW Lua</strong>
                <br />
                Go to the manager tab and click on the <code>[menu]</code> plug-in group.
                Then click "open" next to the Plug-in Groups section. Note that there are
                two "open" buttons. You want to click the bottom one.
            </li>
            <li>
                <strong>Find the saved <code>.lua</code> and select it</strong>
                <br />
                For RGP Lua, click "open" and then "OK". For JW Lua, click "open".
                You should now see the file listed in the plug-in window.
            </li>
            <li>
                <strong>Close the plugin</strong>. You may also get a warning that the changes will
                not be reflected until you restart Finale; you can close this warning.
            </li>
            <li>
                <strong>Restart Finale and view the new script under Plug-ins > Lua</strong>
                <br />
                You can now run this script!
            </li>
        </ol>
    </div>
    <Spacer />
    <YouTubeVideo title="Installing and Using JW/RGP Lua" id="ju99glhwsMs" />
</main>
