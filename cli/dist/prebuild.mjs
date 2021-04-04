import path from "path";
import fs from "fs-extra";
const DOCS_FOLDER = "docs/library";
const DOCS_PUBLISH_PATH = "src/routes/docs/library";
const TOC_TEMPLATE_PATH = "cli/src/templates/toc.svelte";
const DOCS_TEMPLATE_PATH = "cli/src/templates/docs-page.svelte";
const TOC_OUTPUT_PATH = "src/lib/components/library-docs-toc.svelte";
const getAllFiles = (folderPath, arrayOfFiles) => {
  const files = fs.readdirSync(folderPath);
  let output = arrayOfFiles != null ? arrayOfFiles : [];
  files.forEach(function(file) {
    if (fs.statSync(`${folderPath}/${file}`).isDirectory())
      output = getAllFiles(`${folderPath}/${file}`, output);
    else
      output.push(path.join(folderPath, "/", file));
  });
  return output;
};
const getDocsData = () => {
  return fs.readdirSync(DOCS_FOLDER).map((fileName) => {
    const name = fileName.replace(".md", "");
    const splitName = name.split("-");
    const text = splitName.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
    return {text, href: `/docs/library/${name}`};
  });
};
const sortDocsPages = (pages) => {
  return pages.sort((a, b) => {
    return a.text > b.text ? 1 : -1;
  });
};
const addDefaultPages = (pages) => {
  return [
    {text: "Getting started", href: "/docs/getting-started"},
    {text: "Library", href: "/docs/library", children: pages}
  ];
};
const creatTableOfContents = (pages) => {
  const componentContents = fs.readFileSync(TOC_TEMPLATE_PATH).toString();
  const updatedContents = componentContents.replace("const libraryPages: any[] = []", `const libraryPages: any[] = ${JSON.stringify(pages)}`);
  fs.writeFileSync(TOC_OUTPUT_PATH, updatedContents);
};
const removePreviousDocs = () => {
  fs.rmdirSync(DOCS_PUBLISH_PATH, {recursive: true});
};
const copyDocsFiles = () => {
  const docsTemplateContents = fs.readFileSync(DOCS_TEMPLATE_PATH).toString();
  const files = getAllFiles(DOCS_FOLDER);
  console.log({files});
  files.forEach((file) => {
    const contents = fs.readFileSync(file).toString().replace(/`/gu, "\\`").replace(/</gu, "&lt;").replace(/>/gu, "&gt;");
    const fileName = file.replace(DOCS_FOLDER, "").replace(".md", ".svelte");
    const outputPath = path.join(DOCS_PUBLISH_PATH, fileName);
    const outputContents = docsTemplateContents.replace("MARKDOWN_PLACEHOLDER", contents);
    fs.ensureFileSync(outputPath);
    fs.writeFileSync(outputPath, outputContents);
  });
};
const createLibraryDocs = () => {
  let pages = getDocsData();
  pages = sortDocsPages(pages);
  pages = addDefaultPages(pages);
  creatTableOfContents(pages);
  removePreviousDocs();
  copyDocsFiles();
};
const main = () => {
  createLibraryDocs();
};
main();
