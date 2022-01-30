<script lang="ts">
    export let notes: string

    type Content = {
        type: 'p' | 'ol' | 'ul'
        text: string[]
    }[]

    let content: Content = []
    $: {
        const lines = notes.split('\n\n')
        content = lines.map((line) => {
            if (line.startsWith('1)') || line.startsWith('1.')) {
                return {
                    type: 'ol',
                    text: line.split('\n').map((l) => {
                        const matches = l.match(/\d+[\.\)] *(.*)/)
                        return matches?.[1] ?? l
                    }),
                }
            } else if (line.startsWith('- ') || line.startsWith('* ')) {
                return {
                    type: 'ul',
                    text: line.split('\n').map((l) => {
                        const matches = l.match(/[-\*] *(.*)/)
                        return matches?.[1] ?? l
                    }),
                }
            } else {
                return {
                    type: 'p',
                    text: [line],
                }
            }
        })
    }
</script>

<div class="my-3 flex flex-col space-y-2">
    {#each content as block}
        {#if block.type == 'p'}
            <p>{block.text}</p>
        {:else if block.type == 'ul'}
            <ul class="list-disc pl-8">
                {#each block.text as item}
                    <li>{item}</li>
                {/each}
            </ul>
        {:else if block.type == 'ol'}
            <ol class="list-decimal pl-8">
                {#each block.text as item}
                    <li>{item}</li>
                {/each}
            </ol>
        {/if}
    {/each}
</div>
