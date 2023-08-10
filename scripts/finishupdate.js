import { execSync } from "child_process";

import compact from "lodash/compact";
import includes from "lodash/includes";
import toString from "lodash/toString";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import doesGitBranchExistLocally from "./utils/does-git-branch-exist-locally";
import doesGitBranchExistOnRemote from "./utils/does-git-branch-exist-on-remote";

const { update } = yargs(hideBin(process.argv))
  .command("$0", "Finish update")
  .option("update", {
    describe: "Allow update instead of error when the branch exists",
  })
  .parse();

const TRANSLATION_SLUG_PARTS_TO_DROP = 2;
const SECTIONS_TRANSFORMS = new Map([
  ["accessibility", "A11y"],
  ["html", "HTML"],
  ["css", "CSS"],
  ["svg", "SVG"],
  ["api", "API"],
  ["javascript", "JS"],
]);

// Alters section name for some sections
function alterSectionName(section) {
  return SECTIONS_TRANSFORMS.get(section) || section;
}

const requiredTranslationNumber = 1;
let changedTranslations;
try {
  // List changes for index.md files
  changedTranslations = execSync(
    'git status --porcelain | grep "files/.*/\\(index.md\\)\\?$"',
    { encoding: "utf8" }
  )
    .trim()
    .split("\n");
} catch {
  console.error("Failed to get changed translations.");
  process.exit(1);
}
const numberOfTranslations = changedTranslations.length;

if (changedTranslations < requiredTranslationNumber) {
  console.error("Translations not found.");
  process.exit(1);
}

if (numberOfTranslations > requiredTranslationNumber) {
  console.error(
    "You have more than one unstaged translation -- it's unclear what you want to do. Pls commit & push it manually."
  );
  process.exit(1);
}

const [actionMarker, translation] = compact(changedTranslations[0].split(" "));
let action;
switch (actionMarker) {
  case "??":
  case "AM":
  case "A": {
    action = "translation";
    break;
  }
  case "M": {
    action = "update";
    break;
  }
  default: {
    console.log(`${actionMarker} -- better commit this manually.`);
    process.exit(1);
  }
}

const translationFolder = translation.replace("/index.md", "");
const translationSlugParts = translationFolder
  .split("/")
  .slice(TRANSLATION_SLUG_PARTS_TO_DROP);
const translationSlug = translationSlugParts.join("/");

console.log("Switching to a proper Git branch...");
const prefixesToDrop = [
  `${process.cwd()}/`,
  "https://webdoky.org/uk/docs",
  "/",
  "files/uk",
  // Don't remove duplicate slashes
  "/",
];
const suffixesToDrop = ["index.md", "/"];

let targetBranchName = translationSlug;

// Drop usual prefixes: root URL, absolute and relative root folders
prefixesToDrop.forEach((prefix) => {
  if (targetBranchName.startsWith(prefix)) {
    targetBranchName = targetBranchName.slice(prefix.length);
  }
});

// Drop usual suffixes: index.md and a slash
suffixesToDrop.forEach((suffix) => {
  if (targetBranchName.endsWith(suffix)) {
    targetBranchName = targetBranchName.slice(0, -suffix.length);
  }
});

// Replace slashes with hyphens
targetBranchName = targetBranchName.replaceAll("/", "-");

// Lowercase
// targetBranchName = targetBranchName.toLowerCase();

// Three dots are not allowed, they are replaced with a hyphen
targetBranchName = targetBranchName.replaceAll(/\.\.\.+/g, "-");
if (targetBranchName.endsWith("-")) {
  targetBranchName = targetBranchName.slice(0, -"-".length);
}

const currentBranchName = execSync("git rev-parse --abbrev-ref HEAD", {
  encoding: "utf8",
}).trim();

// Check for the case of updating new translation
if (!(update && currentBranchName.endsWith(targetBranchName))) {
  // Add branch name prefix
  targetBranchName = `${action}/${targetBranchName}`;

  console.log("Target branch name:", targetBranchName);
  try {
    if (!update) {
      if (doesGitBranchExistOnRemote(targetBranchName)) {
        console.warn(
          `Branch ${targetBranchName} already exists on remote. Use --update to update it, or check if there is a PR from it already.`
        );
        process.exit(1);
      }
      if (doesGitBranchExistLocally(targetBranchName)) {
        execSync(`git branch -D ${targetBranchName}`);
      }
    }
    execSync(`git checkout master`);
    execSync(`git pull`);
    try {
      execSync(`git checkout -b ${targetBranchName}`);
    } catch (error) {
      if (update && includes(toString(error), "already exists")) {
        execSync(`git checkout ${targetBranchName}`);
      } else {
        console.error(error);
        process.exit(1);
      }
    }
  } catch {
    if (
      execSync("git rev-parse --abbrev-ref HEAD", {
        encoding: "utf8",
      }).trim() === targetBranchName &&
      update
    ) {
      console.log("Already on correct branch");
    } else {
      process.exit(1);
    }
  }
}

console.log("Staging the translation");
// Folder must be added, not single file: the folder may contain misc files
execSync(`git add ${translationFolder}`, { stdio: "inherit" });
let section = translationSlugParts[0];
if (section === "web") {
  [, section] = translationSlugParts;
}
section = alterSectionName(section);

console.log("Staging LanguageTool corrections");
// Always commit language alterings
execSync("git add ./*_additions.txt");
console.log("Git commit");
execSync(`git commit -m "${action}(${section}): ${translationSlug}"`);
console.log("Git push");
execSync("git push");
