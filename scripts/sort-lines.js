import { readFileSync, writeFileSync } from "fs";
import { EOL } from "os";

import _ from "lodash";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const { file } = yargs(hideBin(process.argv))
  .command("$0 <file>", "Sort lines")
  .parse();

if (!file) {
  console.error("File not specified");
  process.exit(1);
}

const fileLines = readFileSync(file, "utf8", "r").split(EOL);

const sortedLines = _.uniq(fileLines).sort((a, b) =>
  a.localeCompare(b, "uk-UA"),
);

writeFileSync(file, sortedLines.join(EOL), "utf8", "w");
