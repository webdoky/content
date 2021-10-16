import glob from 'glob';

import checkFile from './utils/check-file';
import debug from './utils/debug';
import sequentialAsyncForEach from './utils/sequential-async-for-each';

async function getAllFiles() {
  return new Promise((resolve, reject) => {
    glob('files/uk/**/*.@(html|md)', { nodir: true }, (error, filePaths) => {
      debug(filePaths);
      if (error) {
        reject(error);
        return;
      }
      resolve(filePaths);
    });
  });
}

export default async function checkAll() {
  return sequentialAsyncForEach(await getAllFiles(), checkFile);
}
