const { sequenceForEach } = require('..');

const doSomething = require('./dosomething');

const urls = [
  'https://github.com',
  'https://circleci.com/',
  'https://developer.mozilla.org',
  'https://www.npmjs.com',
];

const run = async () => {
  await sequenceForEach(urls, async (url) => {
    // doSomething with the URL
    await doSomething(url, 50);
  });
  console.log('done');
};

run();
