import fs from 'fs'

import type { RequestHandler } from '@sveltejs/kit'

import { dev } from '$app/env'

type OutPut = {
    text: string
    href: string
}[]

let output: OutPut = []

export const get: RequestHandler = () => {
    const files = fs.readdirSync('./')
    console.log({ files })
    if (dev || output.length === 0) {
        output = fs
            .readdirSync('./')
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
