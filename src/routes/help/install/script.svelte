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
            installed RGP Lua.
        </a>
    </Note>
    <Spacer />

    <div class="prose !text-gray-700">
        <ol>
            <li>
                <strong>Make a Lua Scripts folder</strong>
                <br />
                The simplest way to use RGP Lua is to create a "<b>Lua Scripts</b>" folder somewhere useful on your computer, like inside the <b>Documents</b> folder as 
                "<b>Lua Scripts</b>". You then tell <b>RGP Lua</b> to access that folder and Finale will automatically add every Lua script in the folder to the RGP Lua menu.
            </li>
            <li>
                <strong>Download new scripts</strong>
                <br />
                Search for <code>.lua</code> scripts 
                <a sveltekit:prefetch href="/scripts">on this site</a> 
                and click "<b>Download</b>" for each.
            </li>
            <li>
                <strong>Save them</strong>
                <br />
                After downloading move them all to the <b>Lua Scripts</b> folder you created above.
            </li>
            <li>
                <strong>Open Finale</strong>
                <br />
                On Mac open a document to make the RGP Lua plug-in appear.
            </li>
            <li>
                <strong>Open the plugin</strong>
                <br />
                In Finale go to <code>Plug-ins > Lua > RGP Lua...</code>
            </li>
            <li>
                <strong>Click the "Add..." button</strong>
                <br />
                The "<b>Add Item</b>" window opens.
            </li>
            <li>
                <strong>Click the "Select Folder..." button</strong>
                <br />
                Locate your <b>Lua Scripts</b> folder and click <b>Open</b>.
            </li>
            <li>
                <strong>Click OK and click OK again to close the plugin</strong>
                <br />
                A warning will pop up that the changes will not take effect 
                until Finale restarts. Click <b>OK</b>.
            </li>
            <li>
                <strong>Restart Finale</strong>
                <br />
                After Finale restarts all of the Lua scripts in your 
                <b>Lua Scripts</b> folder can now be accessed at 
                <code>Plug-ins > RGP Lua ></code><br />
                New scripts added to your <b>Lua Scripts</b> folder will 
                appear in the <code>Plug-ins > Lua > </code> menu the next time that 
                Finale starts.
            </li>
            
        </ol>
    </div>
    <Spacer />
    <YouTubeVideo title="Installing and Using JW/RGP Lua" id="ju99glhwsMs" />
</main>
