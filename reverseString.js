const reverseString = function reverseString(str) {
  if (typeof str !== 'string') {return 'the input is not a string'};
  const splitString = str.split('').reverse().join('');
  return splitString;
};
module.exports = reverseString;