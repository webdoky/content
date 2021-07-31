import fs from "fs";

import { convert } from "html-to-text";

import { checkText } from "./language-tool.js";
import printCorrection from "./print-correction.js";

export default async function checkFile(filePath) {
  console.debug(`checkFile(${filePath})`);
  const html = fs.readFileSync(filePath, "utf8");
  const text = convert(html, { ignoreHref: true });
  // console.debug(text);
  const corrections = await checkText(text);
  if(!corrections || corrections.length === 0) {
    return true;
  }
  console.debug(JSON.stringify(corrections, null, 2));
  corrections.forEach(printCorrection);
  return false;
}
