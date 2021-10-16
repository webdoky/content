import countdown from './countdown';
import sleep from './sleep';

const CHECK_PAUSE = 200;
function forever(f, pauseMs) {
  return async (...arguments_) => {
    // Endless loop
    // CAUTION! Must be guarded with timeout
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // Asynchroneous execution
      // With retry until success
      // CAUTION! Must be guarded with timeout
      // eslint-disable-next-line no-await-in-loop
      if (await f(...arguments_)) {
        return;
      }
      // Wait between attempts
      // eslint-disable-next-line no-await-in-loop
      await sleep(pauseMs);
    }
  };
}

export default function withRetryUntilTimeout(f, timeoutMs) {
  return (...arguments_) =>
    Promise.race([
      forever(f, CHECK_PAUSE)(...arguments_),
      countdown(timeoutMs),
    ]);
}
