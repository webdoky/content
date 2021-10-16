import fs from 'fs';

import { convert } from 'html-to-text';
import MarkdownIt from 'markdown-it';

import { checkText } from './language-tool';
import printCorrection from './print-correction';

const JSON_PADDING = 2;

const markdownIt = new MarkdownIt({
  // breaks: true,
});

function convertHtmlToText(html) {
  return convert(html, { ignoreHref: true });
}

function convertMarkdownToHtml(markdown) {
  return markdownIt.render(markdown);
}

// eslint-disable-next-line consistent-return
function getText(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (filePath.endsWith('.html')) {
    return convertHtmlToText(content);
  }
  if (filePath.endsWith('.md')) {
    const html = convertMarkdownToHtml(content);
    return convertHtmlToText(html);
  }
}

export default async function checkFile(filePath) {
  console.debug(`checkFile(${filePath})`);
  const text = getText(filePath);
  // console.debug(text);
  const corrections = await checkText(text);
  if (!corrections || corrections.length === 0) {
    return true;
  }
  console.debug(JSON.stringify(corrections, null, JSON_PADDING));
  corrections.forEach((element) => {
    printCorrection(element);
  });
  return false;
}
