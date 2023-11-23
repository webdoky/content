// This script creates a mapping from a text file to a markdown file it was created from.

import { readFileSync } from "fs";

const TEXT_FILE_ARG_INDEX = 2;
const MARKDOWN_FILE_ARG_INDEX = 3;
const textFile = process.argv[TEXT_FILE_ARG_INDEX];
const markdownFile = process.argv[MARKDOWN_FILE_ARG_INDEX];

if (!textFile || !markdownFile) {
  console.log(
    "Usage: node scripts/create-file-mapping.js <text-file> <markdown-file>",
  );
  process.exit(1);
}
const mapping = {};
const text = readFileSync(textFile, "utf8");
const markdown = readFileSync(markdownFile, "utf8");
const WHITESPACE_REGEXP = /\s/;
// Iterate text by Unicode runes
let markdownIndex = 0;
const textRunes = Array.from(text);
// eslint-disable-next-line no-restricted-syntax
for (const [index, rune] of textRunes.entries()) {
  if (!WHITESPACE_REGEXP.test(rune)) {
    const indexInMarkdown = markdown.indexOf(rune, markdownIndex);
    if (indexInMarkdown === -1) {
      console.error(
        `Could not find rune "${rune}" in markdown file "${markdownFile}"`,
      );
    } else {
      mapping[index] = indexInMarkdown;
      markdownIndex = indexInMarkdown + 1;
    }
  }
}

// Write mapping to stdout
console.log(JSON.stringify(mapping));
