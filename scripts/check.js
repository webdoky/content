import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import checkFile from './utils/check-file';
import { executeWithResult } from './utils/execute';
import {
  startLanguageTool,
  stopLanguageTool,
  waitForLanguageTool,
} from './utils/language-tool';
import checkAll from './check-all';

const { argv } = yargs(hideBin(process.argv));
const LIST_GIT_UPDATES_NON_STAGED = 'git ls-files -m -o --exclude-standard';
const LIST_GIT_UPDATES_STAGED = 'git diff --staged --name-only';

async function check() {
  let result = true;
  let targetFiles;
  if (argv.changedOnly) {
    const { stdout: gitStagedUpdates } = await executeWithResult(
      LIST_GIT_UPDATES_STAGED,
    );
    const { stdout: gitNonStagedUpdates } = await executeWithResult(
      LIST_GIT_UPDATES_NON_STAGED,
    );

    targetFiles = Array.from(
      new Set(
        gitStagedUpdates
          .split('\n')
          .concat(gitNonStagedUpdates.split('\n'))
          .filter((filePath) => filePath.endsWith('.md')),
      ), // uniq (yes, a single file may contain both staged and unstaged changes)
    );
  } else {
    targetFiles = argv._.length;
  }
  try {
    await startLanguageTool();
    await waitForLanguageTool();
    if (targetFiles.length > 0) {
      const tasks = targetFiles.map(async (file) => {
        const intermediateResult = await checkFile(file);
        if (result) {
          // false result remains false regardless of any intermediate results
          result = intermediateResult;
        }
      });

      await Promise.all(tasks);
    } else {
      result = await checkAll();
    }
  } finally {
    await stopLanguageTool();
  }
  process.exit(result ? 0 : 1);
}

check();
