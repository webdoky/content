import { execSync } from "child_process";
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

const MARKDOWN_ESCAPE_REGEX = /([!"#'()*+.[\\\]_`{}-])/g;

function escapeTextForMarkdown(text) {
  return text.replaceAll(MARKDOWN_ESCAPE_REGEX, "\\$1");
}

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
  const { context, message, replacements, rule, sentence, shortMessage } =
    match;
  let { length, offset } = match;
  let start;
  length += 1;
  while (!start) {
    offset += 1;
    length -= 1;
    start = Number.parseInt(mapping[offset], 10);
  }
  let endOffset = offset + length;
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
  let comment = "";
  if (shortMessage || rule.description) {
    comment += `### ${escapeTextForMarkdown(
      shortMessage || rule.description,
    )}\n`;
  }
  comment = `${escapeTextForMarkdown(rule.description)}\n${rule.category.id}/${
    rule.id
  }: ${escapeTextForMarkdown(rule.description)}\n`;
  // console.log(`\`${markdownFile}:${startLine}:${startColumn}\n\``);
  comment += `> ${escapeTextForMarkdown(
    context.text.slice(0, context.offset),
  )}**${escapeTextForMarkdown(
    context.text.slice(context.offset, context.offset + context.length),
  )}**${escapeTextForMarkdown(
    context.text.slice(context.offset + context.length),
  )}`;
  if (replacements?.length) {
    comment += "\n\n#### Варіанти заміни\n";
    // eslint-disable-next-line no-restricted-syntax
    for (const replacement of replacements) {
      // console.log(`- ${replacement.value}`);
      comment += `- ${escapeTextForMarkdown(replacement.value)}\n`;
    }
  }
  const parameters = {
    body: comment,
    commit_id: process.env.COMMIT_ID,
    line: endLine,
    path: markdownFile,
    side: "RIGHT",
  };
  if (startLine !== endLine) {
    parameters.start_line = startLine;
    parameters.start_side = "RIGHT";
  }
  let command = `gh api repos/${process.env.GITHUB_REPOSITORY}/pulls/${process.env.PR_NUMBER}/comments`;
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(parameters)) {
    command +=
      typeof value === "number"
        ? ` -F ${key}=${value}`
        : ` -f ${key}="${value}"`;
  }
  console.log(command);
  command = command.replaceAll("\n", "\\\n");
  console.log(`GH_TOKEN=${process.env.GH_TOKEN} ${command}`);
  execSync(command, { stdio: "inherit" });
}
