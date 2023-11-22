// This script creates a mapping from a text file to a markdown file it was created from.

const fs = require("fs");

const textFile = process.argv[2];
const markdownFile = process.argv[3];

if (!textFile || !markdownFile) {
  console.log(
    "Usage: node scripts/create-file-mapping.js <text-file> <markdown-file>",
  );
  process.exit(1);
}
const mapping = {};
const text = fs.readFileSync(textFile, "utf8");
const markdown = fs.readFileSync(markdownFile, "utf8");
const WHITESPACE_REGEXP = /\s/;
// Iterate text by Unicode runes
let markdownIndex = 0;
const textRunes = Array.from(text);
// eslint-disable-next-line no-restricted-syntax
for (const [index, rune] of textRunes.entries()) {
  if (!WHITESPACE_REGEXP.test(rune)) {
    const indexInMarkdown = markdown.indexOf(rune, markdownIndex);
    if (indexInMarkdown === -1) {
      console.log(
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
