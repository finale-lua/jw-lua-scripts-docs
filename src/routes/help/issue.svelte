<script lang="ts">
    import { page } from '$app/stores'

    import FormEntity from '@nick-mazuk/ui-svelte/src/form/form-entity/form-entity.svelte'
    import EmailInput from '@nick-mazuk/ui-svelte/src/form/inputs/email-input/email-input.svelte'
    import TextInput from '@nick-mazuk/ui-svelte/src/form/inputs/text-input/text-input.svelte'

    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    import luaLogo from '$lib/assets/images/lua-logo.png'
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
        description="Tell us about an issue you're having. Everything you submit will be publically available because this project is open source and we use GitHub to keep track of everything. This form will simply create an issue on GitHub without you needing a GitHub account."
    >
        <TextInput />
        <EmailInput
            helpText="This will be public, we will only use it to contact you if we need more info or to let you know when it's resolved"
            optional
        />
    </FormEntity>
</main>
