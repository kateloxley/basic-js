const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = (n + '').split('')
  n = Math.max(...arr.map((el, i) =>
  {
    let newArr = arr.slice();
    newArr.splice(i, 1); 
    let num = newArr.join('');
    return num;
  }))
  return n;
}

module.exports = {
  deleteDigit
};