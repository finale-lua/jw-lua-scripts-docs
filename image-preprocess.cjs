svelte = require('svelte/compiler')

/**
 * @typedef Options
 * @property {{ [tag: string]: string[] }} tags
 */

/**
 * @typedef {import('svelte/types/compiler/interfaces').TemplateNode} TemplateNode
 */

/**
 * @param {Options} [options]
 * @returns {import('svelte/types/compiler/preprocess/types').PreprocessorGroup}
 */
function imagePreprocess(options = {}) {
    const imports = {}
    const tags = options.tags || {
        img: ['src', 'srcset', 'data-src', 'data-srcset'],
        source: ['src', 'srcset', 'data-src', 'data-srcset'],
    }
    return {
        markup: ({ content, filename }) => {
            const preparedContent = content
                .replace(/<style[^>]*>[\w\W]+<\/style>/g, (match) => ' '.repeat(match.length))
                .replace(/<script[^>]*>[\w\W]+<\/script>/g, (match) => ' '.repeat(match.length))
            let ast
            try {
                ast = svelte.parse(preparedContent)
            } catch (e) {
                console.error(e, 'Error parsing content')
                return
            }

            /** @type {TemplateNode[]} */
            const matches = []
            svelte.walk(ast, {
                enter: (node) => {
                    if (!['Element', 'Fragment', 'InlineComponent'].includes(node.type)) {
                        return
                    }

                    if (tags[node.name]) {
                        matches.push({ node, attributes: tags[node.name] })
                    }
                },
            })

            const dependencies = []
            const code = matches.reduce(
                /**
                 * @param {{content: string, offset: number}} processed
                 * @param {{node: TemplateNode, attributes: string[]} match
                 * @param {number} index
                 */
                (processed, match, index) => {
                    const attributes = (match.node.attributes || []).filter(
                        (a) => a.type === 'Attribute' && match.attributes.includes(a.name)
                    )
                    if (
                        attributes.length === 0 ||
                        (match.node.attributes || []).find(
                            (a) => a.name === 'rel' && a.value[0].data === 'external'
                        )
                    ) {
                        return processed
                    }

                    let { content, offset } = processed

                    for (const attribute of attributes) {
                        if (attribute.value[0]?.type === 'Text') {
                            const value = attribute.value[0]
                            if (value.data.startsWith('http')) continue

                            const symbol = `__IMAGE_${index}__`
                            const replacement = `{${symbol}}`

                            if (!imports[filename]) imports[filename] = {}
                            imports[filename][symbol] = value.data

                            dependencies.push(value.data)

                            content =
                                content.substring(0, value.start + offset) +
                                replacement +
                                content.substring(value.end + offset)

                            offset += replacement.length - value.data.length
                        }
                    }
                    return { content, offset }
                },
                { content, offset: 0 }
            ).content

            return { code, dependencies }
        },
        script: ({ content, attributes, filename }) => {
            if (!attributes.context) {
                const localImports = Object.entries(imports[filename] || {})
                if (localImports.length > 0) {
                    const dependencies = localImports.map(([symbol, path]) => path)
                    const code =
                        localImports
                            .map(([symbol, path]) => `import ${symbol} from "${path}"`)
                            .join('\n') +
                        '\n' +
                        content
                    return { code, dependencies }
                }
            }
        },
    }
}

module.exports = imagePreprocess
