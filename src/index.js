const { neq } = require("semver");

module.exports = function reverse (n) {
  const nValue = Math.abs(n);
  const nStr = nValue.toString();
  const nReverse = nStr.split('').reverse().join('');
 
  return nReverse
}
