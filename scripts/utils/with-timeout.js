import countdown from './countdown';

export default function withTimeout(f, timeoutMs) {
  return (...arguments_) =>
    Promise.race([f(...arguments_), countdown(timeoutMs)]);
}
