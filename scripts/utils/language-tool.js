import axios from "axios";
import disabledRules from "./disabled-rules.js";
import execute from "./execute.js";
import sleep from "./sleep.js";

const START_COMMAND = "docker run -d -p 8010:8010 lt-custom";
const STOP_COMMAND =
  process.platform === "win32"
    ? 'FOR /f "tokens=*" %i IN (\'docker ps -a -q --filter ancestor=lt-custom --format="{{.ID}}"\') DO docker stop %i'
    : 'docker stop $(docker ps -a -q --filter ancestor=lt-custom --format="{{.ID}}")';
const TIMEOUT = 8000;

async function checkLanguageTool() {
  try {
    const result = await requestLanguageTool({
      language: "en-US",
      text: "Hello",
    });
    console.debug(result);
    return result.statusText === "OK";
  } catch (error) {
    return false;
  }
}

export async function checkText(text) {
  console.debug("checkText(...)");
  return (
    await requestLanguageTool({
      language: "uk-UA",
      text,
    })
  ).data.matches;
}

function requestLanguageTool(data) {
  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => params.append(key, value));
  // Disables check for unrecommended words
  params.append("disabledRules", disabledRules.join(','));
  return axios.post("http://localhost:8010/v2/check", params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export function startLanguageTool() {
  return execute(START_COMMAND);
}

export function stopLanguageTool() {
  return execute(STOP_COMMAND);
}

export function waitForLanguageTool() {
  return Promise.race([
    new Promise(async (resolve) => {
      while (true) {
        if (await checkLanguageTool()) {
          resolve();
          return;
        }
        await sleep(200);
      }
    }),
    new Promise((resolve, reject) => setTimeout(reject, TIMEOUT)),
  ]);
}
