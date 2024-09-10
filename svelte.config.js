import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'
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
        adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
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
