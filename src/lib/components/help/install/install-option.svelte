<script lang="ts">
    import Container from '@nick-mazuk/ui-svelte/src/utilities/container/container.svelte'

    export let name: string
    export let icon: Function | undefined = undefined
</script>

<Container
    padding="{8}"
    class="flex flex-col items-center justify-center space-y-6"
    variant="click"
    on:click
>
    {#if icon}
        <svelte:component this="{icon}" size="{12}" color="--c-gray" />
    {/if}
    <p class="text-lg text-center">{name}</p>
</Container>
