import checkAll from "./check-all.js";
import checkFile from "./utils/check-file.js";
import {
  startLanguageTool,
  stopLanguageTool,
  waitForLanguageTool,
} from "./utils/language-tool.js";

const [, , targetFile] = process.argv;

async function check() {
  let result = true;
  try {
    await startLanguageTool();
    await waitForLanguageTool();
    if (!targetFile) {
      result = await checkAll();
    } else {
      result = await checkFile(targetFile);
    }
  } finally {
    await stopLanguageTool();
  }
  process.exit(result ? 0 : 1);
}

check();
