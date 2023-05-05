import { execSync } from "child_process";

import { executeWithResult } from "./execute";

export default function doesGitBranchExistOnRemote(branch) {
  const lsRemoteResult = execSync(`git ls-remote origin ${branch}`).toString();
  return !!lsRemoteResult;
}
