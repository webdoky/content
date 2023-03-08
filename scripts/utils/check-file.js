import fs from "fs";

import chalk from "chalk";
import { convert } from "html-to-text";
import MarkdownIt from "markdown-it";

import debug from "./debug";
import { checkText } from "./language-tool";
import printCorrection from "./print-correction";

const MACROS_TO_STRIP = new Set([
  "EmbedGHLiveSample",
  "EmbedInteractiveExample",
  "EmbedLiveSample",
  "jsSidebar",
]);

const markdownIt = new MarkdownIt({
  // breaks: true,
});

/**
 *
 * @param {string} html HTML to remove code from
 * @returns {string} HTML without code snippets
 */
function stripCodeListings(html) {
  debug("stripCodeListings(...)");
  // Only removes multiline listings
  const modifiedHtml = html.replaceAll(
    /<code(?: [^>]+)*>(.+?)<\/code>/gi,
    '"$1"'
  );
  return modifiedHtml.replaceAll(
    /<code(?: [^>]+)*>[\S\s]*?\n[\S\s]*?(<\/code>)/gim,
    ""
  );
}

/**
 *
 * @param {string} text Text to remove macros
 * @returns {string}
 */
function stripMacrosInterpolation(text) {
  debug("stripMacrosInterpolation(...)");
  let modifiedText = text.replaceAll(/{{\s?\w+\s?}}/gi, "");
  modifiedText = modifiedText.replaceAll(
    /{{\s?(\w+)\((?:["']?[^"',]+["']?,\s*)?(["']?[^"',]+["']?)(?:,\s["']?[^"',]+["']?)*\s?\)\s?}}/gim,
    (_, macrosName, lastParameter) => {
      if (MACROS_TO_STRIP.has(macrosName)) {
        debug(`Macros ${macrosName}: skipping`);
        return "";
      }
      debug(`Macros ${macrosName}: staying`);
      return `${lastParameter}`;
    }
  );
  return modifiedText.replaceAll(
    /{{\s?\w+\(["']?([^"']+)["']?\)\s?}}/gim,
    "$1"
  );
}

function convertHtmlToText(html) {
  debug("convertHtmlToText(...)");
  const result = stripMacrosInterpolation(
    convert(stripCodeListings(html), {
      ignoreHref: true,
    })
  );
  debug(result);
  return result;
}

function convertMarkdownToHtml(markdown) {
  debug("convertMarkdownToHtml(...)");
  return markdownIt.render(markdown);
}

function getText(filePath) {
  debug("getText(...)");
  const content = fs.readFileSync(filePath, "utf8");
  if (filePath.endsWith(".html")) {
    return convertHtmlToText(content);
  }
  if (filePath.endsWith(".md")) {
    const html = convertMarkdownToHtml(content);
    return convertHtmlToText(html);
  }
  throw new Error("Unknown file extension");
}

export default async function checkFile(filePath) {
  console.info("\n\n");
  debug(`checkFile(${filePath})`);
  const text = getText(filePath);
  // console.debug(text);
  const corrections = await checkText(text);
  if (!corrections || corrections.length === 0) {
    console.info(`${filePath}: ${chalk.green("OK")}`);
    return true;
  }
  console.info(`${filePath}: ${chalk.red("FAIL")}`);
  // debug(JSON.stringify(corrections, null, JSON_PADDING));
  corrections.forEach((element) => {
    printCorrection(element);
  });
  return false;
}
