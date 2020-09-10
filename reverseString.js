const reverseString = function reverseString(str) {
  const splitString = str.split('').reverse().join('');
  return splitString;
};
module.exports = reverseString;