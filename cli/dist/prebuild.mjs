import fs from "fs-extra";
import path from "path";
const ASSETS_PUBLISH_PATH = "static/docs";
const DOCS_FOLDER = "docs";
const DOCS_PUBLISH_PATH = "src/routes/docs";
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
  let parsedName = splitName.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  parsedName = parsedName.replace("Rgp Lua", "RGP Lua");
  parsedName = parsedName.replace("Jw Lua", "JW Lua");
  return parsedName;
};
const getFolderFromPath = (filePath) => {
  return filePath.replace("docs/", "").replace(/\/[\w.-]*$/u, "").replace(".md", "");
};
const getDocsData = (allFiles) => {
  const folders = {};
  const assets = [];
  allFiles.forEach((fullPath) => {
    var _a, _b;
    const href = createUrlFromFilePath(fullPath);
    const text = createNameFromFilePath(fullPath);
    const folderName = getFolderFromPath(fullPath);
    const output = { text, href, file: fullPath };
    if (folderName.includes("/assets")) {
      assets.push(fullPath);
      return;
    }
    if (typeof folders[folderName] === "undefined") {
      if (((_a = href.match(/\//gu)) != null ? _a : []).length > 2) {
        let name = createNameFromFilePath(folderName);
        folders[folderName] = {
          text: name,
          href: "/docs" + createUrlFromFilePath(folderName),
          file: ""
        };
      } else {
        folders[folderName] = output;
        return;
      }
    }
    if (typeof folders[folderName].children === "undefined")
      folders[folderName].children = [];
    (_b = folders[folderName].children) == null ? void 0 : _b.push(output);
  });
  return [Object.values(folders), assets];
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
  fs.ensureDirSync(DOCS_PUBLISH_PATH);
  fs.rmdirSync(DOCS_PUBLISH_PATH, { recursive: true });
  fs.ensureDirSync(ASSETS_PUBLISH_PATH);
  fs.rmdirSync(ASSETS_PUBLISH_PATH, { recursive: true });
};
const kabobToSentenceCase = (name) => {
  return name.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
};
const populateTemplate = (contents, title, templateContents) => {
  return templateContents.replace("MARKDOWN_PLACEHOLDER", contents.replace(/`/gu, "\\`")).replace("TITLE_PLACEHOLDER", kabobToSentenceCase(title));
};
const copyDocsPage = (file, templateContents) => {
  var _a;
  const contents = fs.readFileSync(file).toString().replace(/`/gu, "`");
  const fileName = file.replace(DOCS_FOLDER, "").replace(".md", ".svelte");
  const outputPath = path.join(DOCS_PUBLISH_PATH, fileName).replace(/_/gu, "-");
  const outputContents = populateTemplate(contents, ((_a = fileName.split("/").pop()) != null ? _a : "").replace(".svelte", "").replace("_", "-"), templateContents);
  fs.ensureFileSync(outputPath);
  fs.writeFileSync(outputPath, outputContents);
};
const generateDocsMainPage = (page, templateContents) => {
  var _a;
  let contents = `# ${page.text}

`;
  (_a = page.children) == null ? void 0 : _a.forEach((child) => {
    contents += `- [${child.text}](${child.href})
`;
  });
  const outputContents = populateTemplate(contents, page.text, templateContents);
  const fileName = page.href.replace("/" + DOCS_FOLDER, "") + ".svelte";
  const outputPath = path.join(DOCS_PUBLISH_PATH, fileName).replace(/_/gu, "-");
  fs.ensureFileSync(outputPath);
  fs.writeFileSync(outputPath, outputContents);
};
const copyDocsPages = (files) => {
  const docsTemplateContents = fs.readFileSync(DOCS_TEMPLATE_PATH).toString();
  files.forEach((mainPage) => {
    var _a;
    if (mainPage.file) {
      copyDocsPage(mainPage.file, docsTemplateContents);
    } else {
      generateDocsMainPage(mainPage, docsTemplateContents);
    }
    (_a = mainPage == null ? void 0 : mainPage.children) == null ? void 0 : _a.forEach((childPage) => {
      copyDocsPage(childPage.file, docsTemplateContents);
    });
  });
};
const copyAssets = (assets) => {
  assets.forEach((asset) => {
    const newFile = path.join(ASSETS_PUBLISH_PATH, asset.replace("docs", ""));
    fs.ensureFileSync(newFile);
    fs.copyFileSync(asset, newFile);
  });
};
const addLayout = () => {
  fs.copyFileSync(LAYOUT_TEMPLATE_PATH, path.join(DOCS_PUBLISH_PATH, "__layout.svelte"));
};
const createLibraryDocs = () => {
  const allFiles = getAllFiles(DOCS_FOLDER).sort();
  let [pages, assets] = getDocsData(allFiles);
  pages = sortDocsPages(pages);
  creatTableOfContents(pages);
  removePreviousDocs();
  copyDocsPages(pages);
  copyAssets(assets);
  addLayout();
};
const main = () => {
  createLibraryDocs();
};
main();
