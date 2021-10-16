export default async function sequentialAsyncEvery(collection, predicate) {
  // eslint-disable-next-line unicorn/no-array-reduce
  return collection.reduce(async (accumulator, item) => {
    if (!(await accumulator)) {
      return accumulator;
    }
    return predicate(item);
  }, Promise.resolve(true));
}
