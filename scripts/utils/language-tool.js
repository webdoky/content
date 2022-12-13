import axios from "axios";

import debug from "./debug";
import disabledRules from "./disabled-rules";
import execute from "./execute";
import withRetryUntilTimeout from "./retry-until-timeout";

const START_COMMAND =
  "docker run --name ltc -d -p 8010:8010 lt-custom || docker start ltc";
const STOP_COMMAND = "docker stop ltc";
const TIMEOUT = 20_000;

function requestLanguageTool(data) {
  const parameters = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => parameters.append(key, value));
  // Disables check for unrecommended words
  parameters.append("disabledRules", disabledRules.join(","));
  return axios.post("http://localhost:8010/v2/check", parameters, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

async function checkLanguageTool() {
  try {
    const result = await requestLanguageTool({
      language: "en-US",
      text: "Hello",
    });
    debug(result);
    return result.statusText === "OK";
  } catch {
    return false;
  }
}

export async function checkText(text) {
  debug("checkText(...)");
  const ltResult = await requestLanguageTool({
    language: "uk-UA",
    text,
  });
  const { matches } = ltResult.data;
  debug(matches);
  return matches;
}

export function startLanguageTool() {
  return execute(START_COMMAND);
}

export function stopLanguageTool() {
  return execute(STOP_COMMAND);
}

export const waitForLanguageTool = withRetryUntilTimeout(
  checkLanguageTool,
  TIMEOUT
);
