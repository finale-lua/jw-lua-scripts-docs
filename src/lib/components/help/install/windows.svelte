<script lang="ts">
    import type { FinaleVersion, PluginVersion } from '$lib/lib/install-data'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    export let pluginVersion: PluginVersion
    export let finaleVersion: FinaleVersion

    const downloadLink: Record<PluginVersion, Record<FinaleVersion, string>> = {
        'JW Lua': {
            '2014.5': '/jw-lua-downloads/jw-lua-windows.zip',
            '25': '/jw-lua-downloads/jw-lua-windows-64.zip',
            '26': '/jw-lua-downloads/jw-lua-windows-64.zip',
        },
        'RGP Lua': {
            '2014.5': 'https://robertgpatterson.com/-fininfo/-rgplua/-download/RGPLuaFin26Win.zip',
            '25': 'https://robertgpatterson.com/-fininfo/-rgplua/-download/RGPLuaFin26Win.zip',
            '26': 'https://robertgpatterson.com/-fininfo/-rgplua/-download/RGPLuaFin26Win.zip',
        },
    }

    const fileName: Record<PluginVersion, string> = {
        'JW Lua': 'three files',
        'RGP Lua': '<code>RGPLuaWin.fxt</code>',
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
            This will create {@html fileName[pluginVersion]}. Unlike installing most programs, you
            will not need to run or open this file. Instead, we just need to move it into your
            Finale plug-ins folder (see next steps).
        </li>
        <li>
            <strong>Find your Finale plug-ins folder</strong>
            <br />
            In Finale, you can find the plugins folder for your version of Finale by going to Finale
            > Preferences > Folders, and checking the "Plug-ins" folder.
        </li>
        <li>
            <strong>In that folder, create a new <code>Lua</code> folder</strong>.
        </li>
        <li>
            <strong>
                Move the {@html fileName[pluginVersion]} into the newly created folder
            </strong>
        </li>
        <li>
            <strong>Restart Finale</strong>
        </li>
    </ol>
</div>
