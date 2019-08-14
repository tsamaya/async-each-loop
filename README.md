# async-each-loop

[![CircleCI branch](https://img.shields.io/circleci/project/github/tsamaya/async-each-loop/master.svg)](https://circleci.com/gh/tsamaya/async-each-loop)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/tsamaya/async-each-loop.svg)](https://greenkeeper.io/)

## Usage

### Install

First install the library with `npm` or `yarn`:

```bash
$ npm i -S async-each-loop
```

or

```bash
$ yarn add async-each-loop
```

### Usage

- With `async/await`:

```js
const { parallelForEach } = require('async-each-loop');

const urls = ['https://github.com', 'https://circleci.com/'];

const run = async () => {
  await parallelForEach(urls, async url => {
    // doSomething with the URL
    await doSomething(url);
  });
  console.log('done');
};

run();
```

- With `Promnise`:

```js
const { parallelForEach } = require('async-each-loop');

const urls = ['https://github.com', 'https://circleci.com/'];

parallelForEach(urls, async url => {
  // doSomething with the URL
  await doSomething(url);
}).then(() => {
  console.log('done');
});
```

## API

### parallelForEach (iterable, fn)

This function execute the input function `fn` forEach element of the input `iterable`. The forEach is running over the elements in parallel.

- iterable is an Array or Map
- fn is a function

### sequenceForEach (iterable, fn)

This function execute the input function `fn` forEach element of the input `iterable`. The execution is in sequence, each function is invoked after the end of the previous element.

- iterable is an Array or Map
- fn is a function

## Contributing

Anyone and everyone is welcome to contribute.

## Issues

Find a bug or want to request a new feature? Please let me know by submitting an issue.

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
