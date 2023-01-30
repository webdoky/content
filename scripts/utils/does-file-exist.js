import { constants } from "node:fs";
import { access } from "node:fs/promises";
/**
 *
 * @param {string} filePath
 * @returns {Promise<boolean>}
 */
export default function doesFileExist(filePath) {
  return access(filePath, constants.F_OK).then(
    () => true,
    () => false
  );
}
