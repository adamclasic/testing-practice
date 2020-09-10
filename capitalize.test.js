const capitalize = require('./capitalize');

test('capitalize the words of the string', () => {
  expect(capitalize('hello there')).toBe('Hello there');
  expect(capitalize(555)).toBe('the input is not a string');
});