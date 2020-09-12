const capitalize = function capitalize(s) {
  if (typeof s !== 'string') { return 'the input is not a string'; }
  return s.charAt(0).toUpperCase() + s.slice(1);
};
module.exports = capitalize;
