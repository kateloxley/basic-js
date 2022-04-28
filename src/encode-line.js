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
  }, new Map()));
  return str.join('').replace(/,/g,'');
}
  

module.exports = {
  encodeLine
};

