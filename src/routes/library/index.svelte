<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit'
    export const load: Load = async () => {
        return {
            redirect: '/library/readme',
            status: 307,
        }
    }
</script>
