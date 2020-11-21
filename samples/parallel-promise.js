const { parallelForEach } = require('..');

const doSomething = require('./dosomething');

const urls = [
  'https://github.com',
  'https://circleci.com/',
  'https://developer.mozilla.org',
  'https://www.npmjs.com',
];

parallelForEach(urls, async (url) => {
  // doSomething with the URL
  await doSomething(url);
}).then(() => {
  console.log('done');
});
