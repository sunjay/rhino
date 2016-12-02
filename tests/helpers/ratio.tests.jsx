const {expect} = require('chai');

const {ratio} = require('../../app/helpers/ratio');

describe('ratio', () => {
  it('should not change when the ratio is 1:1', () => {
    const result = ratio(100, 1, 1);
    expect(result).to.equal(100);
  });

  it('should not change when the ratio is a:a', () => {
    const result = ratio(100, 27, 27);
    expect(result).to.equal(100);
  });

  it('should compute larger values when the new value is greater than the reference', () => {
    const result = ratio(100, 27, 56);
    expect(result).to.equal(207);
  });

  it('should compute smaller values when the new value is smaller than the reference', () => {
    const result = ratio(10, 27, 56);
    expect(result).to.equal(21);
  });
});
