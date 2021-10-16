import glob from 'glob';

import checkFile from './utils/check-file';
import debug from './utils/debug';
import sequentialAsyncMap from './utils/sequential-async-map';

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
  return (await sequentialAsyncMap(await getAllFiles(), checkFile)).every(
    (value) => value,
  );
}
