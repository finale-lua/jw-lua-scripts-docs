import fs from 'fs'
import path from 'path'

import type { RequestHandler } from '@sveltejs/kit'

import { dev } from '$app/env'

const DOCS_PATH = path.join('docs', 'library')

type OutPut = {
    text: string
    href: string
}[]

let output: OutPut = []

export const get: RequestHandler = () => {
    if (dev || output.length === 0) {
        output = fs.readdirSync(DOCS_PATH).map((fileName) => {
            const name = fileName.replace('.md', '')
            const splitName = name.split('-')
            const text = splitName
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join(' ')

            return { text, href: `/library/${name}` }
        })
    }
    return { body: { allFiles: output } }
}
