const sveltePreprocess = require('svelte-preprocess')
const adapter = require('@sveltejs/adapter-static')
const pkg = require('./package.json')

module.exports = {
    preprocess: sveltePreprocess({
        postcss: true,
        defaults: {
            style: 'postcss',
        },
    }),
    kit: {
        adapter: adapter({ out: 'public' }),
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
    },
}
