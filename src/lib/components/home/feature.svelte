<script lang="ts">
    import { onDestroy, onMount } from 'svelte'

    import Image from '../image.svelte'
    export let title: string
    export let description: string
    export let reversed = false
    export let images: string[]

    let currentImage = 0
    let interval: NodeJS.Timeout | undefined
    onMount(() => {
        if (images.length > 1) interval = setInterval(incrementCurrentImage, 4000)
    })

    onDestroy(() => {
        if (interval) clearInterval(interval)
    })

    const incrementCurrentImage = () => (currentImage = (currentImage + 1) % images.length)

    const transitionClasses = 'transition-opacity duration-750'
</script>

<section class="wrapper mt-12">
    <div
        class="flex flex-col space-y-6 sm:items-center sm:space-y-0 sm:space-x-6 {reversed
            ? 'sm:-ml-8 md:-ml-16 lg:-ml-24 xl:-ml-32 sm:flex-row-reverse sm:space-x-reverse'
            : 'sm:-mr-8 md:-mr-16 lg:-mr-24 xl:-mr-32 sm:flex-row'}"
    >
        <div class="flex flex-col space-y-3 sm:w-64 md:w-96 sm:flex-none">
            <h3 class="h5 sm:h4 md:h3">{title}</h3>
            <div class="border-t-2 w-24 border-highlight"></div>
            <p class="text-gray-700">
                {description}
            </p>
        </div>
        <div
            class="relative rounded-xl shadow-xl w-full aspect-w-2 sm:aspect-w-3 aspect-h-1 overflow-hidden dark:bg-foreground dark:text-background"
        >
            {#each images as image, index}
                <Image
                    src="{image}"
                    width="{1200}"
                    alt=""
                    class="absolute w-full h-full object-cover {transitionClasses} {index ===
                    currentImage
                        ? 'opacity-1'
                        : 'opacity-0'}"
                />
            {/each}
            {#if images.length > 1}
                <div
                    class="absolute inset-0 flex items-end justify-center pb-1 pointer-events-none select-none"
                >
                    <p class:opacity-0="{currentImage % 2 !== 0}" class="{transitionClasses}">
                        Before JW Lua
                    </p>
                </div>
                <div
                    class="absolute inset-0 flex items-end justify-center pb-1 pointer-events-none select-none"
                >
                    <p class:opacity-0="{currentImage % 2 === 0}" class="{transitionClasses}">
                        After JW Lua
                    </p>
                </div>
            {/if}
        </div>
    </div>
</section>
