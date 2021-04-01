import fs from 'fs'
import path from 'path'

import type { RequestHandler } from '@sveltejs/kit'

const DOCS_PATH = path.join('docs', 'library')

type OutPut = {
    text: string
    href: string
}[]

export const get: RequestHandler = () => {
    const allFiles: OutPut = fs.readdirSync(DOCS_PATH).map((fileName) => {
        const name = fileName.replace('.md', '')
        const splitName = name.split('-')
        const text = splitName.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')

        return { text, href: `/library/${name}` }
    })
    return { body: { allFiles } }
}
