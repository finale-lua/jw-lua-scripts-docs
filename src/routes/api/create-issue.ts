import type { RequestHandler } from '@sveltejs/kit'

export const post: RequestHandler = async ({ rawBody }) => {
    const body = JSON.parse(rawBody.toString())
    const { description, finale, os, script, name, email } = body
    const fullName = name?.full ?? ''
    if (
        typeof description !== 'string' ||
        typeof finale !== 'string' ||
        typeof os !== 'string' ||
        typeof script !== 'string' ||
        typeof fullName !== 'string' ||
        typeof email !== 'string'
    ) {
        return {
            status: 400,
            body: {
                url: '',
            },
        }
    }
    const response = await fetch('https://api.github.com/repos/Nick-Mazuk/jw-lua-scripts/issues', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${Buffer.from(
                `Nick-Mazuk:${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`
            ).toString('base64')}`,
            accept: 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
            title: `Bug report`,
            labels: ['bug'],
            body: `**Description**\n\n${description}\n\n**Metadata**\n\n- ${finale}\n- ${os}\n- Script: ${script}\n\n_Created through the website${
                fullName || email ? `by ${fullName} ${email}` : ''
            }_`,
        }),
    })
    const json = await response.json()

    return {
        status: response.status === 201 ? 200 : response.status,
        body: {
            url: json.html_url,
        },
    }
}
