<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'

    const content = `# Configuration

This library implements a UTF-8 text file scheme for configuration as follows:

- Comments start with \`--\`
- Leading, trailing, and extra whitespace is ignored
- Each parameter is named and delimited as follows:
\`<parameter-name> = <parameter-value>\`

Parameter values may be:

- Strings delimited with either single- or double-quotes
- Tables delimited with \`{}\` that may contain strings, booleans, or numbers
- Booleans (\`true\` or \`false\`)
- Numbers

Currently the following are not supported:

- Tables embedded within tables
- Tables containing strings that contain commas

A sample configuration file might be:

\`\`\`lua
-- Configuration File for "Hairpin and Dynamic Adjustments" script
--
left_dynamic_cushion 		= 12		--evpus
right_dynamic_cushion		= -6		--evpus
\`\`\`

- [get_parameters](#get_parameters)

## get_parameters

\`\`\`lua
configuration.get_parameters(file_name, parameter_list)
\`\`\`

Searches for a file with the input filename in the \`script_settings\` directory and replaces the default values in \`parameter_list\` with any that are found in the config file.

| Input | Type | Description |
| --- | --- | --- |
| \`file_name\` | \`string\` | the file name of the config file (which will be prepended with the \`script_settings\` directory) |
| \`parameter_list\` | \`table\` | a table with the parameter name as key and the default value as value |`
</script>

<Seo
    title="Configuration"
    siteName="Finale Lua Docs"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://finalelua.com${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://finalelua.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<Markdown content="{content}" headerIds />
