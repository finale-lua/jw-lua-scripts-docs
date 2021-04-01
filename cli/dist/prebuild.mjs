import fs from 'fs-extra'
const DOCS_FOLDER = 'docs/library'
const DOCS_PUBLISH_PATH = 'src/routes/docs/library'
const TOC_TEMPLATE_PATH = 'cli/src/templates/toc.svelte'
const TOC_OUTPUT_PATH = 'src/lib/components/library-docs-toc.svelte'
const getDocsData = () => {
    const data = fs.readdirSync(DOCS_FOLDER).map((fileName) => {
        const name = fileName.replace('.md', '')
        const splitName = name.split('-')
        const text = splitName.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
        return { text, href: `/docs/library/${name}` }
    })
    return data
}
const sortDocsPages = (pages) => {
    return pages.sort((a, b) => {
        return a.text > b.text ? 1 : -1
    })
}
const addDefaultPages = (pages) => {
    return [
        { text: 'Getting started', href: '/docs/getting-started' },
        { text: 'Library', href: '/docs/library', children: pages },
    ]
}
const creatTableOfContents = (pages) => {
    const componentContents = fs.readFileSync(TOC_TEMPLATE_PATH).toString()
    const updatedContents = componentContents.replace(
        'const libraryPages: any[] = []',
        `const libraryPages: any[] = ${JSON.stringify(pages)}`
    )
    fs.writeFileSync(TOC_OUTPUT_PATH, updatedContents)
}
const removePreviousDocs = () => {
    fs.rmdirSync(DOCS_PUBLISH_PATH, { recursive: true })
}
const copyDocsFiles = () => {
    fs.copySync(DOCS_FOLDER, DOCS_PUBLISH_PATH)
}
const createLibraryDocs = () => {
    let pages = getDocsData()
    pages = sortDocsPages(pages)
    pages = addDefaultPages(pages)
    creatTableOfContents(pages)
    removePreviousDocs()
    copyDocsFiles()
}
const main = () => {
    createLibraryDocs()
}
main()
