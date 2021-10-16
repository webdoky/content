import glob from "glob";
import checkFile from "./utils/check-file.js";

async function getAllFiles() {
  return new Promise((resolve, reject) => {
    glob("files/uk/**/*.@(html|md)", { nodir: true }, (err, filePaths) => {
      console.debug(filePaths);
      if (err) {
        reject(err);
        return;
      }
      resolve(filePaths);
    });
  });
}

export default async function checkAll() {
  const allFilePaths = await getAllFiles();
  for (let filePath of allFilePaths) {
    if (!(await checkFile(filePath))) {
      return false;
    }
  }
  return true;
}
