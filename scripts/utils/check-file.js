import fs from "fs";

import { convert } from "html-to-text";
import MarkdownIt from "markdown-it";

import { checkText } from "./language-tool.js";
import printCorrection from "./print-correction.js";

const markdownIt = new MarkdownIt({
  // breaks: true,
});

function convertHtmlToText(html) {
  return convert(html, { ignoreHref: true });
}

function convertMarkdownToHtml(markdown) {
  return markdownIt.render(markdown);
}

function getText(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  if(filePath.endsWith('.html')) {
    return convertHtmlToText(content);
  }
  if(filePath.endsWith('.md')) {
    const html = convertMarkdownToHtml(content);
    return convertHtmlToText(html);
  }
}

export default async function checkFile(filePath) {
  console.debug(`checkFile(${filePath})`);
  const text = getText(filePath);
  // console.debug(text);
  const corrections = await checkText(text);
  if(!corrections || corrections.length === 0) {
    return true;
  }
  console.debug(JSON.stringify(corrections, null, 2));
  corrections.forEach(printCorrection);
  return false;
}
