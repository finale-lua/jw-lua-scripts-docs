<script lang="ts">
    import Container from '@nick-mazuk/ui-svelte/src/utilities/container/container.svelte'
    export let icon: Function
    export let name: string
    export let href: string
</script>

<Container padding="{8}" href="{href}" class="flex flex-col items-center space-y-6">
    <svelte:component this="{icon}" class="h-12" variant="gray" />
    <p class="text-lg">{name}</p>
</Container>
