import { exec } from "child_process";

const IGNORE_PARAMS = 2;
// Get all arguments
const parameters = process.argv.slice(IGNORE_PARAMS).join(" ");

// Execute the command with arguments
exec(`markdownlint-cli2 ${parameters}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
