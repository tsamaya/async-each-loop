const sequenceForEach = async (iterable, fn) => {
  // check fn is a function
  if (typeof fn !== 'function')
    throw new TypeError(
      'sequenceForEach() expects function as second argument'
    );
  // check iterable
  if (!Array.isArray(iterable)) {
    throw new TypeError('sequenceForEach() expects iterable as first argument');
  }

  // for (let index = 0; index < iterable.length; index += 1) {
  //   await fn(iterable[index], index, iterable);
  // }
  await iterable.reduce(
    (promise, task) => promise.then(previous => fn(task, previous)),
    Promise.resolve(null)
  );
};
module.exports = sequenceForEach;
