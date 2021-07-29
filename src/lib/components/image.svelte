<script lang="ts">
    import { onMount } from 'svelte'

    export let source: string
    let classes = ''
    export { classes as class }
    export let alt: string
    export let width: number

    let sourceOriginal: string
    let sourceWebp: string
    let sourceAvif: string
    onMount(async () => {
        sourceOriginal = (await import(`../assets/images/${source}.png?w=${width}`)).default
        sourceWebp = (await import(`../assets/images/${source}.png?webp&w=${width}`)).default
        sourceAvif = (await import(`../assets/images/${source}.png?avif&w=${width}`)).default
    })
</script>

<picture>
    <source srcset="{sourceAvif}" type="image/avif" />
    <source srcset="{sourceWebp}" type="image/webp" />
    <img src="{sourceOriginal}" alt="{alt}" class="{classes}" loading="lazy" />
</picture>
