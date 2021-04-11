/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      res.push(count);
      res.push(arr[i]);
      count = 1;
    }
  }

  const filtRes = res.filter((val) => val !== 1);

  return filtRes.join('');
}

module.exports = encodeLine;
