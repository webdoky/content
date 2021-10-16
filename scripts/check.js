import checkFile from './utils/check-file';
import {
  startLanguageTool,
  stopLanguageTool,
  waitForLanguageTool,
} from './utils/language-tool';
import checkAll from './check-all';

const CLI_ARGUMENT = 2;

const targetFile = process.argv[CLI_ARGUMENT];

async function check() {
  let result = true;
  try {
    await startLanguageTool();
    await waitForLanguageTool();
    result = await (targetFile ? checkFile(targetFile) : checkAll());
  } finally {
    await stopLanguageTool();
  }
  process.exit(result ? 0 : 1);
}

check();
