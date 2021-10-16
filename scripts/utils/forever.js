import sleep from './sleep';

export default async function forever(f, pauseMs) {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // eslint-disable-next-line no-await-in-loop
    if (await f()) {
      return;
    }
    // eslint-disable-next-line no-await-in-loop
    await sleep(pauseMs);
  }
}
