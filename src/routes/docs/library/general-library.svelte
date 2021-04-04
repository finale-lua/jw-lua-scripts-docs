<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'

    const content = `# Library

-   [update_layout](#update_layout)

## update_layout

\`\`\`lua
library.update_layout(from_page, unfreeze_measures)
\`\`\`

| Input                          | Type      | Description                        |
| ------------------------------ | --------- | ---------------------------------- |
| \`from_page\` (optional)         | \`number\`  | page to update from, defaults to 1 |
| \`unfreeze_measures\` (optional) | \`boolean\` | defaults to false                  |
`
</script>

<Markdown content="{content}" headerIds />
