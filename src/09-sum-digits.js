/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = n.toString();
  const arr = str.split('');
  const res = arr.reduce((sum, item) => +sum + +item);

  if (res > 9) {
    return getSumOfDigits(res);
  }
  return res;
}

module.exports = getSumOfDigits;
