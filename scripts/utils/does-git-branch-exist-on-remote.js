import { execSync } from "child_process";

export default function doesGitBranchExistOnRemote(branch) {
  const lsRemoteResult = execSync(`git ls-remote origin ${branch}`).toString();
  return !!lsRemoteResult;
}
