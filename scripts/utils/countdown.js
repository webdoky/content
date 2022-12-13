const ERROR = new Error("Timeout");

export default function countdown(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(ERROR), ms);
  });
}
