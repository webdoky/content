export default function debug(...arguments_) {
  if (!process.env.DEBUG) {
    return;
  }
  console.debug(...arguments_);
}
