export default async function sequentialAsyncMap(collection, f) {
  // eslint-disable-next-line unicorn/no-array-reduce
  return collection.reduce(
    async (accumulator, item) => [...(await accumulator), await f(item)],
    Promise.resolve([]),
  );
}
