<script lang="ts">
    import { page } from '$app/stores'

    import scriptData from '../../lib/lib/script-data.json'
    import type { ScriptData } from '../../lib/types/script-data'

    import FormEntity from '@nick-mazuk/ui-svelte/src/form/form-entity/form-entity.svelte'
    import EmailInput from '@nick-mazuk/ui-svelte/src/form/inputs/email-input/email-input.svelte'
    import NameInput from '@nick-mazuk/ui-svelte/src/form/inputs/name-input/name-input.svelte'
    import TextInput from '@nick-mazuk/ui-svelte/src/form/inputs/text-input/text-input.svelte'
    import Select from '@nick-mazuk/ui-svelte/src/form/inputs/select/select.svelte'

    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    import luaLogo from '$lib/assets/images/lua-logo.png'
    import type { HandleSubmit } from '@nick-mazuk/ui-svelte/src/form'
    import Note from '@nick-mazuk/ui-svelte/src/elements/note/note.svelte'

    const scripts: ScriptData[] = scriptData
    let issueUrl = ''

    const handleSubmit: HandleSubmit = async (data) => {
        const response = await fetch('/api/create-issue', {
            method: 'post',
            body: JSON.stringify(data),
        })
        const json = await response.json()

        if (typeof json.url === 'string') issueUrl = json.url

        return response.status === 200
    }
</script>

<Seo
    title="Report issue"
    siteName="JW Lua Scripts"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://jwluascripts.com/${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://jwluascripts.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<main id="main-content" class="wrapper !max-w-2xl my-12">
    <FormEntity
        title="Report an issue"
        primaryAction="Submit"
        handleSubmit="{handleSubmit}"
        description="Tell us about an issue you're having. Everything you submit will be publically available because this project is open source and we use GitHub to keep track of everything. This form will simply create an issue on GitHub without you needing a GitHub account."
        success="Submitted successfully"
        resetOnSubmit
    >
        <TextInput
            label="Describe your issue, steps to reproduce it, and expected behavor"
            name="description"
            placeholder="{`I encountered this.\n\nSteps to reproduce the behavior:\n1. Go to '...'\n2. Click on '....'\n3. Scroll down to '....'\n4. See error\n\nI expected this to happen.`}"
            type="textarea"
            defaultValue="IGNORE. This is a test for a new issue reporting system for the JW Lua scripts website. The page will allow users without GitHub accounts to create a GitHub issue like this one."
            maxCharacters="{1000}"
        />
        <Select label="Finale version" name="finale" defaultValue="Finale v27">
            <option value="Finale v27">Finale v27</option>
            <option value="Finale v26">Finale v26</option>
            <option value="Finale v25">Finale v25</option>
            <option value="Finale 2014.5">Finale 2014.5</option>
            <option value="Finale 2014">Finale 2014</option>
            <option value="Finale below 2014">Finale below 2014</option>
        </Select>
        <Select label="Operating system" name="os" defaultValue="macOS 12">
            <option value="macOS 12">macOS 12: Monterey</option>
            <option value="macOS 11">macOS 11: Big Sur</option>
            <option value="macOS 10.15">macOS 10.15: Catalina</option>
            <option value="macOS 10.14">macOS 10.14: Mojave</option>
            <option value="macOS < 10.14">macOS below 10.14</option>
            <option value="Windows 11">Windows 11</option>
            <option value="Windows 10">Windows 10</option>
            <option value="Windows 8">Windows 8</option>
            <option value="Windows 7">Windows 7</option>
        </Select>
        <Select label="Script name" name="script" defaultValue="n/a">
            <option value="n/a">Not applicable</option>
            {#each scripts as script}
                <option value="{script.fileName}">{script.name}</option>
            {/each}
        </Select>
        <NameInput optional helpText="This will be public" />
        <EmailInput
            helpText="This will be public, we will only use it to contact you if needed"
            optional
        />
    </FormEntity>
    {#if issueUrl}
        <Spacer />
        <Note label="Success" variant="success">
            Your issue is created. You can view it at
            <a href="{issueUrl}" target="_blank" rel="noreferrer" class="border-b border-success">
                {issueUrl}
            </a>
        </Note>
    {/if}
</main>
