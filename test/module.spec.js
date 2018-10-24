const lib = require('../');

describe('Test Module', () => {
  it('module exists', () => {
    expect(lib).toBeTruthy();
  });
  it('parallelForEach function exists', () => {
    expect(lib.parallelForEach).toBeDefined();
    expect(lib.parallelForEach).toBeInstanceOf(Function);
  });
  it('sequenceForEach function exists', () => {
    expect(lib.sequenceForEach).toBeDefined();
    expect(lib.sequenceForEach).toBeInstanceOf(Function);
  });
});
