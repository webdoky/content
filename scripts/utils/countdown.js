export default function countdown(ms) {
  return new Promise((resolve, reject) => setTimeout(reject, ms));
}
