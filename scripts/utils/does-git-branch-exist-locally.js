import { execSync } from "child_process";

export default function doesGitBranchExistLocally(branch) {
  return !!execSync(`git branch --list ${branch}`).toString();
}
