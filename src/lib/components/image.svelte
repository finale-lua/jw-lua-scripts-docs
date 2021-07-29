<script lang="ts">
    import { onMount } from 'svelte'
    export let src: string
    let classes = ''
    export { classes as class }
    export let alt: string
    export let width: number

    let source: string
    let sourceWebp: string
    let sourceAvif: string
    onMount(async () => {
        source = (await import(`../assets/images/${src}.png?w=${width}`)).default
        sourceWebp = (await import(`../assets/images/${src}.png?webp&w=${width}`)).default
        sourceAvif = (await import(`../assets/images/${src}.png?avif&w=${width}`)).default
    })
</script>

<picture>
    <source srcset="{sourceAvif}" type="image/avif" />
    <source srcset="{sourceWebp}" type="image/webp" />
    <img src="{source}" alt="{alt}" class="{classes}" loading="lazy" />
</picture>
