<script>
    import '@nick-mazuk/ui-config/colors.css'
    import '@nick-mazuk/ui-config/styles.css'
</script>

<div class="flex md:space-x-12 wrapper my-16">
    <aside class="hidden md:block w-40 lg:w-64 flex-none">
        <nav class="sticky top-24 max-h-screen overflow-scroll pb-24"></nav>
    </aside>
    <slot />
</div>
