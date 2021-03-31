const sveltePreprocess = require('svelte-preprocess')
const vercel = require('@sveltejs/adapter-vercel')
const pkg = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: sveltePreprocess({
        postcss: true,
        defaults: {
            style: 'postcss',
        },
    }),
    kit: {
        adapter: vercel(),
        target: '#svelte',
        vite: {
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {}),
            },
        },
        files: {
            assets: 'static',
            hooks: 'src/hooks',
            lib: 'src/lib',
            routes: 'src/routes',
            serviceWorker: 'src/service-worker',
            template: 'src/app.html',
        },
        hydrate: false,
    },
}
