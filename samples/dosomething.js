const doSomething = (input, ms) =>
  new Promise(r => {
    const to = ms || Math.floor(Math.random() * 5000 + 1);
    setTimeout(() => {
      console.log(input);
      r();
    }, to);
  });

module.exports = doSomething;
