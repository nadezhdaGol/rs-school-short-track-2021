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
  const shortDomains = [];

  for (let i = 0; i < domains.length; i++) {
    for (let j = domains[i].length - 1; j >= 0; j--) {
      if (domains[i][j] === '.') {
        shortDomains.push(domains[i].slice(j + 1));
      }
    }
  }

  const allDomains = domains.concat(shortDomains);
  const uniqueDomains = Array.from(new Set(allDomains));

  let finDomains = [];
  for (let i = 0; i < uniqueDomains.length; i++) {
    finDomains.push(`.${uniqueDomains[i].split('.').reverse().join('.')}`);
  }
  finDomains = finDomains.sort();

  const originalDomainsRev = [];
  for (let i = 0; i < domains.length; i++) {
    originalDomainsRev.push(`.${domains[i].split('.').reverse().join('.')}`);
  }

  const countDomains = [];
  for (let i = 0; i < originalDomainsRev.length; i++) {
    for (let j = 0; j < finDomains.length; j++) {
      if (originalDomainsRev[i].includes(finDomains[j])) {
        countDomains.push(finDomains[j]);
      }
    }
  }

  const resObj = {};
  countDomains.forEach((item) => {
    resObj[item] = (resObj[item] || 0) + 1;
  });

  return resObj;
}

module.exports = getDNSStats;
