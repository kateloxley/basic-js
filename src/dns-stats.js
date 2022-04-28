const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newDomains = {};  
  domains.forEach(el => {
      let item = el.split('.').reverse();
      let str = '';
      for (let i = 0; i < item.length; i++) {
          str = str + '.'.concat(item[i]);
          if(newDomains[str] === undefined) {
              newDomains[str] = 1;
          } else {
              newDomains[str] += 1;
          }
      }
  });
  return newDomains
}

module.exports = {
  getDNSStats
};

