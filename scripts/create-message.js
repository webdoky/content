// Read LanguageTool output from ./results.json
// and txt-to-markdown mapping from ./mapping.json
// and print an errorformat message for each error
// to stdout.

import { readFileSync } from "fs";

const results = JSON.parse(readFileSync("./results.json"));
const MARKDOWN_FILE_ARG_INDEX = 2;
/**
 * @type {Record<number, number>}
 */
const mapping = JSON.parse(readFileSync("./mapping.json"));
const markdownFile = process.argv[MARKDOWN_FILE_ARG_INDEX];
const markdown = readFileSync(markdownFile, "utf8");

const markdownRunes = Array.from(markdown);

function convertOffsetToLineAndColumn(offset) {
  let line = 1;
  let column = 1;
  for (let index = 0; index < offset; index += 1) {
    const rune = markdownRunes[index];
    if (rune === "\n") {
      line += 1;
      column = 1;
    } else {
      column += 1;
    }
  }
  return [line, column];
}

// eslint-disable-next-line no-restricted-syntax
for (const match of results.matches) {
  const {
    offset,
    length,
    message,
    // rule: { id: type },
  } = match;
  const endOffset = offset + length;
  const start = mapping[offset];
  const end = mapping[endOffset];
  const [startLine, startColumn] = convertOffsetToLineAndColumn(start);
  const [endLine, endColumn] = convertOffsetToLineAndColumn(end);
  const errorformatLine = `${markdownFile}:${startLine}:${startColumn}:${endLine}:${endColumn}: ${message}`;
  console.log(errorformatLine);
}
