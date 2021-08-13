import fs from "fs";

const disabledRules = fs
  .readFileSync("disabled_rules.txt", { encoding: "utf8", flag: "r" })
  .split("\n");

export default disabledRules;
