/**
 * Computes the ratio:
 *     newValueA : newValueB = refA : refB
 * Returns newValueB
 * Useful for computing aspect ratio values / constraining to proportions
 * Routes to nearest integer
 */
exports.ratio = function(newValueA, refA, refB) {
  return Math.round(newValueA * refB / refA);
};
