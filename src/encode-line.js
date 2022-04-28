const { NotImplementedError } = require('../extensions/index.js');

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
  str =  Array.from(str.split('').reduce((item, el) => {
    item.set(el, (item.get(el) || 0) + 1);
    return item;
      console.log(item)
  }, new Map()));
  str.forEach(el => {
      [el[0], el[1]] = [el[1], el[0]]
  });
  str = str.join('').replace(/,/g,'')
  return str;
}


module.exports = {
  encodeLine
};

