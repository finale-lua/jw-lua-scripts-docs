import fs from 'fs-extra'
import path from 'path'

const ASSETS_PUBLISH_PATH = 'static/docs'
const DOCS_FOLDER = 'docs'
const DOCS_PUBLISH_PATH = 'src/routes/docs'
const DOCS_TEMPLATE_PATH = 'cli/src/templates/docs-page.svelte'
const LAYOUT_TEMPLATE_PATH = 'cli/src/templates/docs-layout.svelte'
const TOC_OUTPUT_PATH = 'src/lib/lib/library-pages.ts'

type LibraryDocumentData = {
    text: string
    href: string
    file: string
    children?: {
        text: string
        href: string
        file: string
    }[]
}

const getAllFiles = (folderPath: string, arrayOfFiles?: string[]) => {
    const files = fs.readdirSync(folderPath)

    let output = arrayOfFiles ?? []

    files.forEach(function (file) {
        if (fs.statSync(`${folderPath}/${file}`).isDirectory())
            output = getAllFiles(`${folderPath}/${file}`, output)
        else output.push(path.join(folderPath, '/', file))
    })

    return output
}

const createUrlFromFilePath = (filePath: string): string => {
    return `/${filePath.replace(/_/gu, '-').replace('.md', '')}`
}

const createNameFromFilePath = (filePath: string): string => {
    const splitPath = filePath.split('/')
    const fileName = (splitPath.pop() ?? '').replace('.md', '')
    const name = fileName.replace(/[_-]/gu, ' ')
    const splitName = name.split(' ')
    let parsedName = splitName.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
    parsedName = parsedName.replace('Rgp Lua', 'RGP Lua')
    parsedName = parsedName.replace('Jw Lua', 'JW Lua')
    return parsedName
}

const getFolderFromPath = (filePath: string): string => {
    return filePath
        .replace('docs/', '')
        .replace(/\/[\w.-]*$/u, '')
        .replace('.md', '')
}

const getDocsData = (allFiles: string[]): [LibraryDocumentData[], string[]] => {
    const folders: { [folderName: string]: LibraryDocumentData } = {}
    const assets: string[] = []
    allFiles.forEach((fullPath) => {
        const href = createUrlFromFilePath(fullPath)
        const text = createNameFromFilePath(fullPath)
        const folderName = getFolderFromPath(fullPath)
        const output = { text, href, file: fullPath }

        if (folderName.includes('/assets')) {
            assets.push(fullPath)
            return
        }
        if (typeof folders[folderName] === 'undefined') {
            if ((href.match(/\//gu) ?? []).length > 2) {
                // create main page even though it doesn't exist
                let name = createNameFromFilePath(folderName)
                folders[folderName] = {
                    text: name,
                    href: '/docs' + createUrlFromFilePath(folderName),
                    file: '',
                }
            } else {
                folders[folderName] = output
                return
            }
        }
        if (typeof folders[folderName].children === 'undefined') folders[folderName].children = []
        folders[folderName].children?.push(output)
    })
    return [Object.values(folders), assets]
}

const sortDocsPages = (pages: LibraryDocumentData[]): LibraryDocumentData[] => {
    return pages.sort((a, b) => {
        return a.text > b.text ? 1 : -1
    })
}

const creatTableOfContents = (pages: LibraryDocumentData[]) => {
    const contents = `export const libraryPages: any[] = ${JSON.stringify(pages)}`
    fs.writeFileSync(TOC_OUTPUT_PATH, contents)
}

const removePreviousDocs = () => {
    fs.ensureDirSync(DOCS_PUBLISH_PATH)
    fs.rmdirSync(DOCS_PUBLISH_PATH, { recursive: true })
    fs.ensureDirSync(ASSETS_PUBLISH_PATH)
    fs.rmdirSync(ASSETS_PUBLISH_PATH, { recursive: true })
}

const kabobToSentenceCase = (name: string) => {
    return name
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')
}

const populateTemplate = (contents: string, title: string, templateContents: string): string => {
    return templateContents
        .replace('MARKDOWN_PLACEHOLDER', contents.replace(/`/gu, '\\`').replace(/\$\{/gu, '\\${'))
        .replace('TITLE_PLACEHOLDER', kabobToSentenceCase(title))
}

const copyDocsPage = (file: string, templateContents: string) => {
    const contents = fs
        .readFileSync(file)
        .toString()
        .replace(/`/gu, '`')

    const fileName = file.replace(DOCS_FOLDER, '').replace('.md', '.svelte')
    const outputPath = path.join(DOCS_PUBLISH_PATH, fileName).replace(/_/gu, '-')

    const outputContents = populateTemplate(
        contents,
        (fileName.split('/').pop() ?? '').replace('.svelte', '').replace('_', '-'),
        templateContents
    )

    fs.ensureFileSync(outputPath)

    fs.writeFileSync(outputPath, outputContents)
}

const generateDocsMainPage = (page: LibraryDocumentData, templateContents: string) => {
    let contents = `# ${page.text}\n\n`
    page.children?.forEach((child) => {
        contents += `- [${child.text}](${child.href})\n`
    })
    const outputContents = populateTemplate(contents, page.text, templateContents)

    const fileName = page.href.replace('/' + DOCS_FOLDER, '') + '.svelte'
    const outputPath = path.join(DOCS_PUBLISH_PATH, fileName).replace(/_/gu, '-')
    fs.ensureFileSync(outputPath)

    fs.writeFileSync(outputPath, outputContents)
}

const copyDocsPages = (files: LibraryDocumentData[]) => {
    const docsTemplateContents = fs.readFileSync(DOCS_TEMPLATE_PATH).toString()
    files.forEach((mainPage) => {
        if (mainPage.file) {
            copyDocsPage(mainPage.file, docsTemplateContents)
        } else {
            generateDocsMainPage(mainPage, docsTemplateContents)
        }
        mainPage?.children?.forEach((childPage) => {
            copyDocsPage(childPage.file, docsTemplateContents)
        })
    })
}

const copyAssets = (assets: string[]) => {
    assets.forEach((asset) => {
        const newFile = path.join(ASSETS_PUBLISH_PATH, asset.replace('docs', ''))
        fs.ensureFileSync(newFile)
        fs.copyFileSync(asset, newFile)
    })
}

const addLayout = () => {
    fs.copyFileSync(LAYOUT_TEMPLATE_PATH, path.join(DOCS_PUBLISH_PATH, '__layout.svelte'))
}

const createLibraryDocs = () => {
    const allFiles = getAllFiles(DOCS_FOLDER).sort()
    let [pages, assets] = getDocsData(allFiles)
    pages = sortDocsPages(pages)
    creatTableOfContents(pages)
    removePreviousDocs()
    copyDocsPages(pages)
    copyAssets(assets)
    addLayout()
}

const main = () => {
    createLibraryDocs()
}

main()
