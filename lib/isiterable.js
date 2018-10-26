const isIterable = object =>
  object !== null && typeof object[Symbol.iterator] === 'function';

module.exports = isIterable;
