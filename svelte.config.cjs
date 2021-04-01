const sveltePreprocess = require('svelte-preprocess')
const adapter = require('@sveltejs/adapter-vercel')
const pkg = require('./package.json')
const { mdsvex } = require(`mdsvex`)

const extensions = [`.svelte`, '.md', `.mdx`, '.svx']

module.exports = {
    preprocess: [
        sveltePreprocess({
            postcss: true,
            defaults: {
                style: 'postcss',
            },
        }),
        mdsvex({ extensions }),
    ],
    extensions,
    kit: {
        adapter: adapter(),
        target: '#svelte',
        vite: {
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {}),
            },
            build: {
                brotliSize: false,
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
