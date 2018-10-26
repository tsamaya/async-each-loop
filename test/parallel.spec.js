const { parallelForEach } = require('../');
const waitFor = require('./wait');

describe('parallelForEach Function tests', () => {
  // sum array values
  it('loop over an array', done => {
    const input = [1, 2, 3];
    let sum = 0;
    const start = async () => {
      await parallelForEach(input, elem => {
        sum += elem;
      });
      expect(sum).toEqual(6);
      done();
    };
    start();
  });

  // simulate async request and sum up results
  it('async requests', done => {
    const input = [1, 2, 3];
    let sum = 0;
    let tot = 0;
    const start = async () => {
      await parallelForEach(input, async () => {
        const to = Math.floor(Math.random() * 50 + 1);
        tot += to;
        await waitFor(to);
        sum += to;
      });
      expect(sum).toEqual(tot);
      done();
    };
    start();
  });

  // simulate async request and sum up results
  it('Map async requests', done => {
    const input = new Map();
    input.set('foo', 'bar');
    input.set('jean', 'dupont');
    input.set('pino', 'tito');
    let sum = 0;
    let tot = 0;
    const start = async () => {
      await parallelForEach(input, async () => {
        const to = Math.floor(Math.random() * 50 + 1);
        tot += to;
        await waitFor(to);
        sum += to;
      });
      expect(sum).toEqual(tot);
      done();
    };
    start();
  });

  // //////////////////////////////////////////////////////////////////////////
  //
  // rainy tests
  //
  it('throw a TypeError function expected', done => {
    const input = [1, 2, 3];
    const start = async () => {
      try {
        await parallelForEach(input);
        // expect throw to bypass these lines
        expect(true).toBeFalsy();
        done(-1);
      } catch (e) {
        expect(e.constructor).toEqual(TypeError);
        // success
        done();
      }
    };
    start();
  });
  it('throw a TypeError array expected', done => {
    const input = {};
    const start = async () => {
      try {
        await parallelForEach(input, elem => elem);
        // expect throw to bypass these lines
        expect(true).toBeFalsy();
        done(-1);
      } catch (e) {
        expect(e.constructor).toEqual(TypeError);
        // success
        done();
      }
    };
    start();
  });
});
