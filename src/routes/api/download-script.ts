import { promisify } from 'util'

import type { RequestHandler } from '@sveltejs/kit'
import { createClient } from 'redis'

import { dev } from '$app/env'

export const post: RequestHandler = async ({ rawBody }) => {
    const body = JSON.parse(rawBody.toString())

    const { scriptName, author } = body

    if (typeof scriptName !== 'string' || typeof author !== 'string')
        return { status: 400, body: {} }

    if (dev) return { body: {} }

    const client = createClient({
        host: import.meta.env.VITE_REDIS_ENDPOINT,
        port: import.meta.env.VITE_REDIS_PORT,
        password: import.meta.env.VITE_REDIS_PASSWORD,
        tls: {},
    })

    const increment = promisify(client.incr).bind(client)

    await Promise.all([
        increment(`downloads:${scriptName}`),
        increment(`downloads:${author}`),
        increment('downloads'),
    ])

    client.quit()

    return { body: {} }
}
