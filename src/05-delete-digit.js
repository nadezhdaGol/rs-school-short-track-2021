/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const min = String(n).split('').sort()[0];
  const numArr = String(n).split('');
  const res = [];
  let count = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === min && count === 0) {
      res.push();
      count++;
    } else {
      res.push(numArr[i]);
    }
  }

  return +res.join('');
}

module.exports = deleteDigit;
