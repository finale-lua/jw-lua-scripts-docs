<script lang="ts">
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'

    export let title: string
</script>

<p class="text-lg">{title}</p>
<Spacer />
<div class="grid grid-flow-row sm:grid-flow-col gap-6" style="grid-auto-columns: minmax(0, 1fr);">
    <slot />
</div>
