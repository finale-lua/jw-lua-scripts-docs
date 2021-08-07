import path from "path";
import fs from "fs-extra";
const DOCS_FOLDER = "docs";
const DOCS_PUBLISH_PATH = "src/routes/docs";
const TOC_TEMPLATE_PATH = "cli/src/templates/toc.svelte";
const DOCS_TEMPLATE_PATH = "cli/src/templates/docs-page.svelte";
const LAYOUT_TEMPLATE_PATH = "cli/src/templates/docs-layout.svelte";
const TOC_OUTPUT_PATH = "src/lib/lib/library-pages.ts";
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
const createUrlFromFilePath = (filePath) => {
  return `/${filePath.replace(/_/gu, "-").replace(".md", "")}`;
};
const createNameFromFilePath = (filePath) => {
  var _a;
  const splitPath = filePath.split("/");
  const fileName = ((_a = splitPath.pop()) != null ? _a : "").replace(".md", "");
  const name = fileName.replace(/[_-]/gu, " ");
  const splitName = name.split(" ");
  return splitName.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
};
const getFolderFromPath = (filePath) => {
  return filePath.replace("docs/", "").replace(/\/[\w.-]*$/u, "").replace(".md", "");
};
const getDocsData = (allFiles) => {
  const folders = {};
  allFiles.forEach((fullPath) => {
    var _a;
    const href = createUrlFromFilePath(fullPath);
    const text = createNameFromFilePath(fullPath);
    const folderName = getFolderFromPath(fullPath);
    const output = { text, href };
    if (typeof folders[folderName] === "undefined") {
      folders[folderName] = output;
    } else {
      if (typeof folders[folderName].children === "undefined")
        folders[folderName].children = [];
      (_a = folders[folderName].children) == null ? void 0 : _a.push(output);
    }
  });
  return Object.values(folders);
};
const sortDocsPages = (pages) => {
  return pages.sort((a, b) => {
    return a.text > b.text ? 1 : -1;
  });
};
const creatTableOfContents = (pages) => {
  const contents = `export const libraryPages: any[] = ${JSON.stringify(pages)}`;
  fs.writeFileSync(TOC_OUTPUT_PATH, contents);
};
const removePreviousDocs = () => {
  fs.rmdirSync(DOCS_PUBLISH_PATH, { recursive: true });
};
const copyDocsFiles = (files) => {
  const docsTemplateContents = fs.readFileSync(DOCS_TEMPLATE_PATH).toString();
  files.forEach((file) => {
    const contents = fs.readFileSync(file).toString().replace(/`/gu, "\\`").replace(/</gu, "&lt;").replace(/>/gu, "&gt;");
    const fileName = file.replace(DOCS_FOLDER, "").replace(".md", ".svelte");
    const outputPath = path.join(DOCS_PUBLISH_PATH, fileName).replace(/_/gu, "-");
    const outputContents = docsTemplateContents.replace("MARKDOWN_PLACEHOLDER", contents);
    fs.ensureFileSync(outputPath);
    fs.writeFileSync(outputPath, outputContents);
  });
};
const addLayout = () => {
  fs.copyFileSync(LAYOUT_TEMPLATE_PATH, path.join(DOCS_PUBLISH_PATH, "__layout.svelte"));
};
const createDocsSearch = (allFiles) => {
  const config = ["[input]", 'base_directory = "."', "files = ["];
  allFiles.forEach((file) => {
    config.push(`    {path = "${file}", url = "${createUrlFromFilePath(file)}", title = "${createNameFromFilePath(file)}"},`);
  });
  config.push("]", "", "[output]", 'filename = "static/stork.st"');
  fs.writeFileSync("config.toml", config.join("\n"));
};
const createLibraryDocs = () => {
  const allFiles = getAllFiles(DOCS_FOLDER).sort();
  let pages = getDocsData(allFiles);
  pages = sortDocsPages(pages);
  creatTableOfContents(pages);
  removePreviousDocs();
  copyDocsFiles(allFiles);
  addLayout();
  createDocsSearch(allFiles);
};
const main = () => {
  createLibraryDocs();
};
main();
