import fs from 'fs';

import chalk from 'chalk';
import { convert } from 'html-to-text';
import MarkdownIt from 'markdown-it';

import debug from './debug';
import { checkText } from './language-tool';
import printCorrection from './print-correction';

const markdownIt = new MarkdownIt({
  // breaks: true,
});

function stripCodeListings(html) {
  debug('stripCodeListings(...)');
  // Only removes multiline listings
  const modifiedHtml = html.replace(
    /<code(?: [^>]+)*>[\S\s]*\n[\S\s]*(<\/code>)/gim,
    '',
  );
  return modifiedHtml.replace(/<code(?: [^>]+)*>(.+)<\/code>/gi, '"$1"');
}

function stripGlossaryInterpolation(text) {
  debug('stripGlossaryInterpolation(...)');
  let modifiedText = text.replace(/{{\s?\w+\s?}}/gi, '');
  modifiedText = modifiedText.replace(
    /{{\s?\w+\(["'].+["'],\s+["']([^"']+)["'](?:, .+)*\)\s?}}/gim,
    '"$1"',
  );
  return modifiedText.replace(/{{\s?\w+\(["']([^"']+)["']\)\s?}}/gim, '"$1"');
}

function convertHtmlToText(html) {
  debug('convertHtmlToText(...)');
  const result = stripGlossaryInterpolation(
    convert(stripCodeListings(html), {
      ignoreHref: true,
    }),
  );
  debug(result);
  return result;
}

function convertMarkdownToHtml(markdown) {
  debug('convertMarkdownToHtml(...)');
  return markdownIt.render(markdown);
}

function getText(filePath) {
  debug('getText(...)');
  const content = fs.readFileSync(filePath, 'utf8');
  if (filePath.endsWith('.html')) {
    return convertHtmlToText(content);
  }
  if (filePath.endsWith('.md')) {
    const html = convertMarkdownToHtml(content);
    return convertHtmlToText(html);
  }
  throw new Error('Unknown file extension');
}

export default async function checkFile(filePath) {
  console.info('\n\n');
  debug(`checkFile(${filePath})`);
  const text = getText(filePath);
  // console.debug(text);
  const corrections = await checkText(text);
  if (!corrections || corrections.length === 0) {
    console.info(`${filePath}: ${chalk.green('OK')}`);
    return true;
  }
  console.info(`${filePath}: ${chalk.red('FAIL')}`);
  // debug(JSON.stringify(corrections, null, JSON_PADDING));
  corrections.forEach((element) => {
    printCorrection(element);
  });
  return false;
}
