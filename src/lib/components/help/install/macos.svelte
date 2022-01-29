<script lang="ts">
    import type { FinaleVersion, PluginVersion } from '$lib/lib/install-data'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    export let pluginVersion: PluginVersion
    export let finaleVersion: FinaleVersion

    const downloadLink: Record<PluginVersion, Record<FinaleVersion, string>> = {
        'JW Lua': {
            '2014.5': '/jw-lua-downloads/jw-lua-mac.zip',
            '25': '/jw-lua-downloads/jw-lua-mac-64.zip',
            '26': '/jw-lua-downloads/jw-lua-mac-64.zip',
        },
        'RGP Lua': {
            '2014.5': 'https://robertgpatterson.com/-fininfo/-rgplua/-download/RGPLuaFin26Mac.zip',
            '25': 'https://robertgpatterson.com/-fininfo/-rgplua/-download/RGPLuaFin26Mac.zip',
            '26': 'https://robertgpatterson.com/-fininfo/-rgplua/-download/RGPLuaFin26Mac.zip',
        },
    }

    const bundleFilename: Record<PluginVersion, Record<FinaleVersion, string>> = {
        'JW Lua': {
            '2014.5': 'jwlua.bundle',
            '25': 'jwlua64.bundle',
            '26': 'jwlua64.bundle',
        },
        'RGP Lua': {
            '2014.5': 'RGPLua.bundle',
            '25': 'RGPLua.bundle',
            '26': 'RGPLua.bundle',
        },
    }

    const pluginFolder: Record<FinaleVersion, string> = {
        '2014.5': '/Library/Application Support/MakeMusic/Finale 2014.5/Plug-ins',
        '25': '/Library/Application Support/MakeMusic/Finale/Plug-ins',
        '26': '/Library/Application Support/MakeMusic/Finale 26/Plug-ins',
    }
</script>

<h2 class="h5">Installing {pluginVersion}</h2>
<Spacer />

<div class="prose !text-gray-700">
    <p>
        To use the Lua scripts in Finale, you first need to install {pluginVersion}. Luckily, this
        is a one-time process.
    </p>
    <ol>
        <li>
            <strong>Download {pluginVersion}</strong>
            <br />
            <a href="{downloadLink[pluginVersion][finaleVersion]}" download>
                Click here to start the download
            </a>
        </li>
        <li>
            <strong>Double-click the downloaded file to unzip it</strong>
            <br />
            This will generate the file
            <code>{bundleFilename[pluginVersion][finaleVersion]}</code> file. Unlike installing most
            programs, you will not need to run or open this file. Instead, we just need to move it into
            your Finale plug-ins folder (see next steps).
        </li>
        <li>
            <strong>Find your Finale plug-ins folder</strong>
            <br />
            In Finale, you can find the plugins folder for your version of Finale by going to Finale
            > Preferences > Folders, and checking the "Plug-ins" folder. Check there in case you've customized
            the folder in the past. By default, this is
            <code>{pluginFolder[finaleVersion]}</code>.
        </li>
        <li>
            <strong>In that folder, create a new <code>Lua</code> folder</strong>.
        </li>
        <li>
            <strong>
                Move the <code>{bundleFilename[pluginVersion][finaleVersion]}</code> file into the newly
                created folder
            </strong>
        </li>
        <li>
            <strong>Restart Finale</strong>
        </li>
    </ol>
    {#if pluginVersion === 'JW Lua'}
        <p>
            If you're on macOS Mojave or earlier, you're all set! If not, you'll likely run into the
            "unverified developer" error. If so, see the next section.
        </p>
    {/if}
</div>

{#if pluginVersion === 'JW Lua'}
    <Spacer />
    <h2 class="h5">Unverified developer error</h2>
    <Spacer />

    <div class="prose !text-gray-700">
        <p>
            If you're on macOS Catalina or later, you'll run into an issue when you restart Finale:
            <code>
                "{bundleFilename[pluginVersion][finaleVersion]}" cannot be opened because the
                developer cannot be verified.
            </code>
            Here's how to fix it, though if you want more details on why this happens, checkout this
            video:
            <a href="https://youtu.be/iq3Xcpsewhk" target="_blank" rel="noreferrer">
                https://youtu.be/iq3Xcpsewhk
            </a>
        </p>
        <ol>
            <li>
                <strong>Press cancel</strong>
                <br />
                When you get that error message.
            </li>
            <li>
                <strong>Open System Preferences, then Security & Privacy</strong>
                <br />
                Go to the general pane.
            </li>
            <li>
                <strong>Click "allow anyway"</strong>
                <br />
                Next to
                <code>
                    "{bundleFilename[pluginVersion][finaleVersion]}" was blocked from use because it
                    is not from a verified developer
                </code>, there will be a button "allow anyway". Click that button. Authenticate with
                your admin username/password if prompted.
            </li>
            <li>
                <strong>Restart Finale</strong>
            </li>
            <li>
                <strong>Click "open"</strong>
                <br />
                When Finale is restarted, you will see a the dialog
                <code>
                    macOS could not verify the developer of "{bundleFilename[pluginVersion][
                        finaleVersion
                    ]}. Are you sure you want to open it?
                </code>. Click "open" on this dialog.
            </li>
        </ol>
    </div>
{/if}
