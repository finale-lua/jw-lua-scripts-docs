import fs from 'fs'
import path from 'path'

import type { RequestHandler } from '@sveltejs/kit'

const DOCS_PATH = path.join('src', 'docs', 'library')

export const get: RequestHandler = (context) => {
    if (!context) return { status: 500 }

    const page = context.query.get('page')

    if (typeof page !== 'string') return { status: 400 }

    const content = fs.readFileSync(path.join(DOCS_PATH, `${page}.md`)).toString()
    return { body: { content } }
}
