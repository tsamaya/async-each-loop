const isIterable = require('./isiterable');

const processArray = async (iterable, fn) => {
  // what about rejection ?
  await Promise.all(
    iterable.map(async (elem, index) => {
      try {
        await fn(elem, index, iterable);
      } catch (error) {
        // TODO : find an elegant wait to deal with rejections
        // mute error for now.
      }
    })
  );
};

const processMap = async (iterable, fn) => {
  const keys = [...iterable.keys()];
  // what about rejection ?
  await Promise.all(
    keys.map(async (key, index) => {
      try {
        await fn(iterable.get(key), index, iterable);
      } catch (error) {
        // TODO : find an elegant wait to deal with rejections
        // mute error for now.
      }
    })
  );
};

/**
 * Returns a single Promise that resolves when all of the element in the
 * iterable have been apply the Function
 * The forEach() method executes a provided function once for each array element.
 *  exectution in parallel
 *  mute rejection, run all
 *
 * @param  {Iterable}   iterable [description]
 * @param  {Function}   fn       [description]
 * @return {Promise}             resolved when all
 */
const parallelForEach = async (iterable, fn) => {
  // check fn is a function
  if (typeof fn !== 'function')
    throw new TypeError(
      'parallelForEach() expects function as second argument'
    );
  // check iterable
  if (!isIterable(iterable)) {
    throw new TypeError('parallelForEach() expects iterable as first argument');
  }

  if (Array.isArray(iterable)) {
    await processArray(iterable, fn);
  } else if (iterable instanceof Map) {
    await processMap(iterable, fn);
  } else {
    throw new TypeError('Iterable not supported. Supports Map and Array');
  }
};

module.exports = parallelForEach;
