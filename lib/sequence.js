const isIterable = require('./isiterable');

const processArray = async (iterable, fn) => {
  const reducer = (promise, elem) =>
    promise.then(previous => fn(elem, previous));

  await iterable.reduce(reducer, Promise.resolve());
};

const processMap = async (iterable, fn) => {
  const keys = [...iterable.keys()];

  const reducer = (promise, key) =>
    promise.then(previous => fn(iterable.get(key), previous));

  await keys.reduce(reducer, Promise.resolve());
};

/**
 * [sequenceForEach description]
 * @param  {Iterable}   iterable [description]
 * @param  {Function} fn       [description]
 * @return {Promise}           [description]
 */
const sequenceForEach = async (iterable, fn) => {
  // check fn is a function
  if (typeof fn !== 'function')
    throw new TypeError(
      'sequenceForEach() expects function as second argument'
    );
  // check iterable
  if (!isIterable(iterable)) {
    throw new TypeError('sequenceForEach() expects iterable as first argument');
  }

  if (Array.isArray(iterable)) {
    await processArray(iterable, fn);
  } else if (iterable instanceof Map) {
    await processMap(iterable, fn);
  } else {
    throw new TypeError('Iterable not supported . Supports Map and Array');
  }
};

module.exports = sequenceForEach;
