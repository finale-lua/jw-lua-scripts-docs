<script lang="ts">
    import { marked } from 'marked'

    export let notes: string

    $: {
        let classString = ''

        const renderer = {
            heading(text: string, level: number) {
                switch (level) {
                    case 1:
                        classString = 'font-bold text-2xl'
                        break
                    case 2:
                        classString = 'font-bold text-xl'
                        break
                    default:
                        classString = 'font-bold text-lg'
                        break
                }

                return `<h${level} class="${classString}">${text}</h${level}>\n`
            },
            list(body: string, ordered: boolean) {
                classString = ordered ? 'list-decimal pl-8' : 'list-disc pl-8'
                const type = ordered ? 'ol' : 'ul'

                return `<${type} class="${classString}">${body}</${type}>\n`
            },
            code(code: string) {
                classString = 'bg-gray-200 text-gray-800 rounded-lg px-3 py-2'
                return `<pre class="${classString}"><code>${code}</code></pre>\n`
            },
            codespan(code: string) {
                classString =
                    'bg-gray-200 border border-gray-300 text-gray-800 rounded px-1 py-0.5 -my-0.5'
                return `<code class="${classString}">${code}</code>`
            },
            table(header: string, body: string) {
                classString = 'table-auto'
                return `<table class="${classString}"><thead>${header}</thead><tbody>${body}</tbody></table>\n`
            },
            tablecell(content: string, flags: any) {
                classString = 'text-left border border-gray-600'
                const type = flags.header ? 'th' : 'td'
                return `<${type} class="${classString}">${content}</td>\n`
            },
        }

        marked.use({ renderer })
    }
</script>

<div class="my-3 flex flex-col space-y-2">
    {@html marked.parse(notes)}
</div>
