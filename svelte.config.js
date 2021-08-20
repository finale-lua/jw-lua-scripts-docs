import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'
import { imagetools } from 'vite-imagetools'
import imagePreprocess from './image-preprocess.cjs'

export default {
    preprocess: [
        sveltePreprocess({
            postcss: true,
            defaults: {
                style: 'postcss',
            },
        }),
        imagePreprocess(),
    ],
    kit: {
        adapter: adapter(),
        target: '#svelte',
        files: {
            assets: 'static',
            hooks: 'src/hooks',
            lib: 'src/lib',
            routes: 'src/routes',
            serviceWorker: 'src/service-worker',
            template: 'src/app.html',
        },
        prerender: {
            pages: ['*'],
        },
        vite: {
            plugins: [imagetools()],
        },
    },
}
