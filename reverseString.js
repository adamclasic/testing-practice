const { mod } = require("prelude-ls");

const reverseString = function reverseString(str) {
  let splitString = str.split("").reverse().join('');
  return splitString;
}
module.exports = reverseString;