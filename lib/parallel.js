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
const parallelForEach = (iterable, fn) =>
  new Promise((resolve /* , reject */) => {
    // check fn is a function
    if (typeof fn !== 'function')
      throw new TypeError(
        'parallelForEach() expects function as second argument'
      );
    // check iterable
    if (!Array.isArray(iterable)) {
      throw new TypeError(
        'parallelForEach() expects iterable as first argument'
      );
    }
    // what about rejection ?
    Promise.all(
      iterable.map(async (elem, index) => {
        try {
          await fn(elem, index, iterable);
        } catch (error) {
          // TODO : find an elegant wait to deal with rejections
          // mute error for now.
        }
      })
    ).then(() => {
      resolve();
    });
  });

module.exports = parallelForEach;
