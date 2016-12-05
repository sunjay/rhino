/**
 * Coordinates can usually be either positive or negative
 * but sometimes we need them to only be positive integers
 */
export function isPositiveCoordinate(value) {
  return isInteger(value) && value >= 0;
}

/**
 * Sizes have to be numbers and non-zero
 */
export function isValidSize(value) {
  return isInteger(value) && value > 0;
}

/**
 * Checks if a value is an integer
 */
export function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * Checks if the value is different from the given value
 */
export function isDifferent(value, otherValue) {
  return value !== otherValue;
}
