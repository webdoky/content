import caporal from "@caporal/core";
import { eachLimit } from "async";
import cliProgress from "cli-progress";
import fdirPkg from "fdir";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { checkFrontMatter, getAjvValidator } from "./front-matter-utils";

const { fdir: Fdir } = fdirPkg;
const { program } = caporal;

async function resolveDirectory(file) {
  const stats = await fs.lstat(file);
  if (stats.isDirectory()) {
    const api = new Fdir()
      .withErrors()
      .withFullPaths()
      .filter((filePath) => filePath.endsWith("index.md"))
      .crawl(file);
    return api.withPromise();
  }
  if (
    stats.isFile() &&
    file.endsWith("index.md") &&
    !file.includes("tests/front-matter_test_files")
  ) {
    return [file];
  }
  return [];
}

// lint front matter
async function lintFrontMatter(filesAndDirectories, options) {
  const files = (
    await Promise.all(
      filesAndDirectories.map((fileOrDirectory) =>
        resolveDirectory(fileOrDirectory),
      ),
    )
  )
    // eslint-disable-next-line unicorn/no-await-expression-member
    .flat();

  options.config = JSON.parse(await fs.readFile(options.configFile));

  options.validator = getAjvValidator(options.config.schema);

  const progressBar = new cliProgress.SingleBar({ etaBuffer: 100 });
  progressBar.start(files.length, 0);

  const errors = [];
  const fixableErrors = [];
  await eachLimit(files, os.cpus().length, async (file) => {
    try {
      const [error, fixableError, content] = await checkFrontMatter(
        file,
        options,
      );
      if (content) {
        fs.writeFile(file, content);
      }
      if (error) {
        errors.push(error);
      }
      if (fixableError) {
        fixableErrors.push(fixableError);
      }
    } catch (error) {
      errors.push(`${error}\n ${error.stack}`);
    } finally {
      progressBar.increment();
    }
  });
  progressBar.stop();
  console.log(errors.length, fixableErrors.length);
  if (errors.length > 0 || fixableErrors.length > 0) {
    let message = errors.map((error) => `${error}`).join("\n\n");

    if (fixableErrors.length > 0) {
      message +=
        "\n\nFollowing fixable errors can be fixed using '--fix true' option\n";
      message += fixableErrors.map((error) => `${error}`).join("\n");
    }
    throw new Error(message);
  }
}

function tryOrExit(f) {
  return async ({ options = {}, ...arguments_ }) => {
    try {
      await f({ options, ...arguments_ });
    } catch (error) {
      if (options.verbose || options.v) {
        console.error(error.stack);
      }
      throw error;
    }
  };
}

program
  .option("--fix", "Save corrected output", {
    validator: program.BOOLEAN,
    default: false,
  })
  .option("--config-file", "Custom configuration file", {
    validator: program.STRING,
    default: "./front-matter-config.json",
  })
  .argument("[files...]", "list of files and/or directories to check", {
    default: ["./files/en-us"],
  })
  .action(
    tryOrExit(({ args, options, logger }) => {
      const cwd = process.cwd();
      const files = (args.files || []).map((f) => path.resolve(cwd, f));
      if (files.length === 0) {
        logger.info("No files to lint.");
        return;
      }
      // eslint-disable-next-line consistent-return
      return lintFrontMatter(files, options);
    }),
  );

program.run();
