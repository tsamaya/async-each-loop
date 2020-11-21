const { sequenceForEach } = require('..');
const waitFor = require('./wait');

describe('sequenceForEach Function tests', () => {
  // sum array values
  it('loop over an array', async () => {
    const input = [1, 2, 3];
    let sum = 0;
    const start = async () => {
      await sequenceForEach(input, (elem) => {
        sum += elem;
      });
    };
    await start();
    expect(sum).toEqual(6);
  });

  // simulate async request and sum up results
  it('async requests', async () => {
    const input = [1, 2, 3];
    let sum = 0;
    let tot = 0;
    const start = async () => {
      await sequenceForEach(input, async () => {
        const to = Math.floor(Math.random() * 50 + 1);
        tot += to;
        await waitFor(to);
        sum += to;
      });
      // console.log('sum', sum, 'tot', tot);
    };
    await start();
    expect(sum).toEqual(tot);
  });

  // simulate async request and sum up results
  it('Map async requests', async () => {
    const input = new Map();
    input.set('foo', 'bar');
    input.set('jean', 'dupont');
    input.set('pino', 'tito');
    let sum = 0;
    let tot = 0;
    const start = async () => {
      await sequenceForEach(input, async () => {
        const to = Math.floor(Math.random() * 50 + 1);
        tot += to;
        await waitFor(to);
        sum += to;
      });
    };
    await start();
    expect(sum).toEqual(tot);
  });

  // //////////////////////////////////////////////////////////////////////////
  //
  // rainy tests
  //
  it('throw a TypeError function expected', async () => {
    const input = [1, 2, 3];
    const fn = async () => sequenceForEach(input);
    await expect(fn()).rejects.toThrow();
  });
  it('throw a TypeError array expected', async () => {
    const input = {};
    const fn = async () => sequenceForEach(input, (elem) => elem);
    await expect(fn).rejects.toThrow(TypeError);
  });
});
