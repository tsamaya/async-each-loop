const { parallelForEach } = require('..');

const doSomething = require('./dosomething');

const urls = [
  'https://github.com',
  'https://circleci.com/',
  'https://developer.mozilla.org',
  'https://www.npmjs.com',
];

const run = async () => {
  await parallelForEach(urls, async url => {
    // doSomething with the URL
    await doSomething(url);
  });
  console.log('done');
};

run();
