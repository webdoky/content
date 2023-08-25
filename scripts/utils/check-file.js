import fs, { writeFile } from "fs";

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
  "js_property_attributes"
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
  let modifiedHtml = html.replace(
    /<h2>title: ([^\n]+)[\S\s]*?<\/h2>/gim,
    "<h1>$1</h1>",
  );
  modifiedHtml = modifiedHtml.replaceAll(
    /<code(?: [^>]+)*>(.+?)<\/code>/gi,
    '"$1"',
  );
  modifiedHtml = modifiedHtml.replaceAll(
    /<code(?: [^>]+)*>[\S\s]*?\n[\S\s]*?(<\/code>)/gim,
    "",
  );
  modifiedHtml = modifiedHtml.replaceAll(
    /&lt;math[\S\s]+&lt;\/math&gt;/gim,
    "",
  );
  writeFile("output.html", modifiedHtml, () => {
    console.log("Output HTML written");
  });
  return modifiedHtml;
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
    },
  );
  return modifiedText.replaceAll(
    /{{\s?\w+\(["']?([^"']+)["']?\)\s?}}/gim,
    "$1",
  );
}

function convertHtmlToText(html) {
  debug("convertHtmlToText(...)");
  const result = stripMacrosInterpolation(
    convert(stripCodeListings(html), {
      ignoreHref: true,
    }),
  );
  debug(result);
  writeFile("output.txt", result, () => {
    console.log("Output TXT written");
  });
  return result;
}

function convertMarkdownToHtml(markdown) {
  debug("convertMarkdownToHtml(...)");
  const html = markdownIt.render(markdown);
  return html;
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
