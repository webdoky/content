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
const LIST_GIT_UPDATES = 'git ls-files -m -o --exclude-standard';

async function check() {
  let result = true;
  let targetFiles;
  if (argv.changedOnly) {
    const gitUpdates = await executeWithResult(LIST_GIT_UPDATES);
    const { stdout } = gitUpdates;

    targetFiles = stdout
      .split('\n')
      .filter((filePath) => filePath.endsWith('.md'));
  } else {
    targetFiles = argv._;
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
