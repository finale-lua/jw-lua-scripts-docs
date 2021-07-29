<script lang="ts">
    import type { ImageSource } from '../lib/images'
    import { images } from '../lib/images'

    export let source: ImageSource
    let classes = ''
    export { classes as class }
    export let alt: string
</script>

<picture>
    <source srcset="{images[source].avif}" type="image/avif" />
    <source srcset="{images[source].webp}" type="image/webp" />
    <img src="{images[source].png}" alt="{alt}" class="{classes}" loading="lazy" />
</picture>
