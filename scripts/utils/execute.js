import childProcess from "child_process";

import debug from "./debug";

export default async function execute(command) {
  debug(command);
  const statusCode = await new Promise((resolve, reject) => {
    const process = childProcess.exec(command);
    process.on("error", reject);
    process.on("close", resolve);
    process.stdout?.on?.("data", (data) => console.debug(data));
    process.stderr?.on?.("data", (data) => console.warn(data));
  });
  if (statusCode) {
    throw new Error("Failure");
  }
}

export async function executeWithResult(command) {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}
