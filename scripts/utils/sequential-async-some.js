export default async function sequentialAsyncSome(collection, predicate) {
  // eslint-disable-next-line unicorn/no-array-reduce
  return collection.reduce(async (accumulator, item) => {
    if (await accumulator) {
      return accumulator;
    }
    return predicate(item);
  }, Promise.resolve(false));
}
