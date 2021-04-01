import fs from 'fs'

import type { RequestHandler } from '@sveltejs/kit'

import { dev } from '$app/env'

type OutPut = {
    text: string
    href: string
}[]

const DOCS_DIR = dev ? 'src/routes/library' : '../../../static/app/pages/library'

let output: OutPut = []

export const get: RequestHandler = () => {
    const files = fs.readdirSync(DOCS_DIR)
    console.log({ files })
    if (dev) {
        output = fs
            .readdirSync(DOCS_DIR)
            .filter((fileName) => fileName.match('.md'))
            .map((fileName) => {
                const name = fileName.replace('.md', '')
                const splitName = name.split('-')
                const text = splitName
                    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                    .join(' ')

                return { text, href: `/library/${name}` }
            })
    } else {
        output = fs
            .readdirSync(DOCS_DIR)
            .filter((fileName) => fileName.match('.md-'))
            .map((fileName) => {
                const [name] = fileName.split('.md-')
                const splitName = name.split('-')
                const text = splitName
                    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                    .join(' ')

                return { text, href: `/library/${name}` }
            })
    }

    return { body: { allFiles: output } }
}
