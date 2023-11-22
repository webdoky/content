// Read LanguageTool output from ./results.json
// and txt-to-markdown mapping from ./mapping.json
// and print an errorformat message for each error
// to stdout.

import { readFileSync } from "fs";

const results = JSON.parse(readFileSync("./result.json"));
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
  const { context, message, offset, replacements, rule, sentence } = match;
  let { length } = match;
  let endOffset = offset + length;
  const start = Number.parseInt(mapping[offset], 10);
  let end;
  endOffset -= 1;
  length -= 1;
  while (!end) {
    endOffset += 1;
    length += 1;
    end = Number.parseInt(mapping[endOffset], 10);
  }
  console.error(start, end);
  const [startLine, startColumn] = convertOffsetToLineAndColumn(start);
  const [endLine, endColumn] = convertOffsetToLineAndColumn(end);
  if (endLine < startLine) {
    console.error(startLine, endLine);
    throw new Error(`Line not found in source file: ${sentence}`);
  }
  if (endLine === startLine && endColumn < startColumn) {
    console.error(startColumn, endColumn);
    throw new Error(`Column not found in source file: ${sentence}`);
  }
  // const errorformatLine = `${markdownFile}:${startLine}:${startColumn}:${endLine}:${endColumn}: ${message}`;
  // console.log(errorformatLine);
  console.log(`## ${message}\n`);
  console.log(`\`${markdownFile}:${startLine}:${startColumn}\n\``);
  console.log(`${rule.description}:\n`);
  console.log(
    `> ${context.text.slice(0, context.offset)}**${context.text.slice(
      context.offset,
      context.offset + context.length,
    )}**${context.text.slice(context.offset + context.length)}_`,
  );
  console.log("Варіанти заміни:");
  if (replacements.length > 0) {
    // eslint-disable-next-line no-restricted-syntax
    for (const replacement of replacements) {
      console.log(`- ${replacement.value}`);
    }
  } else {
    console.log("Немає");
  }
  console.log("\n");
}
