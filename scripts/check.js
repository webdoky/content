import checkFile from './utils/check-file';
import {
  startLanguageTool,
  stopLanguageTool,
  waitForLanguageTool,
} from './utils/language-tool';
import checkAll from './check-all';

// eslint-disable-next-line no-magic-numbers
const targetFile = process.argv[2];

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

// eslint-disable-next-line unicorn/prefer-top-level-await
check();
