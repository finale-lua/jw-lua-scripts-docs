<script lang="ts">
    export let title: string
    export let description: string
    export let reversed = false
</script>

<section class="wrapper mt-12">
    <div
        class="flex flex-col space-y-6 sm:items-center sm:space-y-0 sm:space-x-6 {reversed
            ? 'sm:-ml-32 sm:flex-row-reverse sm:space-x-reverse'
            : 'sm:-mr-32 sm:flex-row'}"
    >
        <div class="flex flex-col space-y-3 sm:w-64 md:w-96 sm:flex-none">
            <h3 class="h5 sm:h4 md:h3">{title}</h3>
            <p class="text-gray-700">
                {description}
            </p>
        </div>
        <div class="rounded-xl shadow-xl bg-background w-full h-96"></div>
    </div>
</section>
