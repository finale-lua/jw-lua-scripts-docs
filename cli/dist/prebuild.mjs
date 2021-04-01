import fs from "fs";
const LIBRARY_FOLDER = "src/routes/library";
const TOC_TEMPLATE_PATH = "cli/src/templates/toc.svelte";
const TOC_OUTPUT_PATH = "src/lib/components/library-docs-toc.svelte";
const getLibraryDocsData = () => {
  const data = fs.readdirSync(LIBRARY_FOLDER).filter((fileName) => fileName.match(".md")).map((fileName) => {
    const name = fileName.replace(".md", "");
    const splitName = name.split("-");
    const text = splitName.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
    return {text, href: `/library/${name}`};
  });
  return data;
};
const sortLibraryDocs = (pages) => {
  return pages.sort((a, b) => {
    if (a.text === "Readme")
      return -1;
    return a.text > b.text ? 1 : -1;
  });
};
const creatTableOfContents = (pages) => {
  const componentContents = fs.readFileSync(TOC_TEMPLATE_PATH).toString();
  const updatedContents = componentContents.replace("const libraryPages: any[] = []", `const libraryPages: any[] = ${JSON.stringify(pages)}`);
  fs.writeFileSync(TOC_OUTPUT_PATH, updatedContents);
};
const main = () => {
  let pages = getLibraryDocsData();
  pages = sortLibraryDocs(pages);
  creatTableOfContents(pages);
};
main();
