import glob from 'glob';

import checkFile from './utils/check-file';
import sequentialAsyncEvery from './utils/sequential-async-every';

async function getAllFiles() {
  return new Promise((resolve, reject) => {
    glob('files/uk/**/*.@(html|md)', { nodir: true }, (error, filePaths) => {
      console.debug(filePaths);
      if (error) {
        reject(error);
        return;
      }
      resolve(filePaths);
    });
  });
}

export default async function checkAll() {
  return sequentialAsyncEvery(await getAllFiles(), checkFile);
}
