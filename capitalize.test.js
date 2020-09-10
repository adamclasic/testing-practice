const capitalize = require('./capitalize');

test('capitalize the words of the string', () => {
  expect(capitalize('hello there')).toBe('Hello there');
});