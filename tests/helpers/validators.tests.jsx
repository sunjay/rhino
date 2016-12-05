const {expect} = require('chai');

const {
  isInteger,
  isValidSize,
  isPositiveCoordinate,
  isDifferent,
} = require('../../app/helpers/validators');

describe('isInteger', () => {
  it('should accept valid positive or negative integers including zero', () => {
    expect(isInteger(-100)).to.be.true;
    expect(isInteger(-1)).to.be.true;
    expect(isInteger(0)).to.be.true;
    expect(isInteger(1)).to.be.true;
    expect(isInteger(100)).to.be.true;
  });

  it('should reject infinity and not a number', () => {
    expect(isInteger(1/0)).to.be.false;
    expect(isInteger(-1/0)).to.be.false;
    expect(isInteger(Infinity)).to.be.false;
    expect(isInteger(-Infinity)).to.be.false;
    expect(isInteger(NaN)).to.be.false;
  });

  it('should reject non-integers', () => {
    expect(isInteger(1.5)).to.be.false;
    expect(isInteger(100/57)).to.be.false;
    expect(isInteger(Math.PI)).to.be.false;
  });
});

describe('isValidSize', () => {
  it('should allow valid sizes', () => {
    expect(isValidSize(1)).to.be.true;
    expect(isValidSize(2)).to.be.true;
    expect(isValidSize(485)).to.be.true;
  });

  it('should reject zero sizes', () => {
    expect(isValidSize(0)).to.be.false;
  });

  it('should reject negative sizes', () => {
    expect(isValidSize(-15)).to.be.false;
  });

  it('should reject non-integer sizes', () => {
    expect(isValidSize(1.5)).to.be.false;
  });
});

describe('isPositiveCoordinate', () => {
  it('should allow valid coordinates', () => {
    expect(isPositiveCoordinate(1)).to.be.true;
    expect(isPositiveCoordinate(2)).to.be.true;
    expect(isPositiveCoordinate(485)).to.be.true;
  });

  it('should allow zero coordinates', () => {
    expect(isPositiveCoordinate(0)).to.be.true;
  });

  it('should reject negative coordinates', () => {
    expect(isPositiveCoordinate(-15)).to.be.false;
  });

  it('should reject non-integer coordinates', () => {
    expect(isValidSize(1.5)).to.be.false;
  });
});

describe('isDifferent', () => {
  it('should know when numbers are the same', () => {
    expect(isDifferent(1.5, 1.5)).to.be.false;
    expect(isDifferent(300, 300)).to.be.false;
  });

  it('should know when numbers are different', () => {
    expect(isDifferent(1.5, 1.51)).to.be.true;
    expect(isDifferent(300, 586)).to.be.true;
  });
});
