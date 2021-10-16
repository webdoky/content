export default async function sequentialAsyncForEach(collection, f) {
  // eslint-disable-next-line unicorn/no-array-reduce
  return collection.reduce(async (accumulator, item) => {
    await accumulator;
    await f(item);
  }, Promise.resolve());
}
