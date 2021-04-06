# JW Lua Scripts docs

This is the documentation site for the [JW Lua Scripts repository](https://github.com/Nick-Mazuk/jw-lua-scripts).

Visit the site: [https://jw-lua-scripts-docs.vercel.app/](https://jw-lua-scripts-docs.vercel.app/)

## Development

This site is built with Sveltekit. However, there are some quirks to know about as much of the source code is automatically generated. This site is designed to be low maintenance. If you wish to edit the contents (i.e., not fixing a bug), create a PR for the [main repo](https://github.com/Nick-Mazuk/jw-lua-scripts) instead.

### Getting started

After cloning, make sure to install the dependencies.

```bash
pnpm i
```

```bash
pnpm dev #start development server
pnpm dev:open # start development server and open in new browser tab
pnpm build # create production build, by default uses vercel adapter
pnpm start # starts the production server

pnpm test # run tests
pnpm lint # format and lint everything
```

### Automatic docs generation

Everything in the `/docs` folder is automatically added when the docs are updated in the main repository. Then, when the site is built, the markdown files are automatically transformed into the Svelte files in the actual site. Consequently, any edits to the `/docs` or `/src/routes/docs` folders will be overwritten when the site is deployed.

Furthermore, the search files (`/src/static/stork.st` and `/src/static/stork.wasm`) are also automatically generated during deploy.

To ensure you have the most recent files in development, run this:

```bash
pnpm prebuild
pnpm stork # if this fails, make sure you have Stork search installed on your machine
```
