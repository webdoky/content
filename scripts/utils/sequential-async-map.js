export default async function sequentialAsyncMap(collection, f) {
  return collection.reduce(
    async (accumulator, item) => [...(await accumulator), await f(item)],
    Promise.resolve([])
  );
}
