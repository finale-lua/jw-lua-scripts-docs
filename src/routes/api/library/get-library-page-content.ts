// import fs from 'fs'

import type { RequestHandler } from '@sveltejs/kit'

// const DOCS_PATH = path.join('docs', 'library')

export const get: RequestHandler = (context) => {
    if (!context) return { status: 500 }

    const page = context.query.get('page')

    if (typeof page !== 'string') return { status: 400 }

    // const content = fs.readFileSync(path.join(DOCS_PATH, `${page}.md`)).toString()

    return { body: { content: '# This actually works' } }
}
