const reverseString = require('./reverseString');
// const { test } = require('picomatch');

test('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('dsh5gje37;]f')).toBe('f];73ejg5hsd');
  expect(reverseString(555)).toBe('the input is not a string');
});
