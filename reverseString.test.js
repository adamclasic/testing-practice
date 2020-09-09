const reverseString = require('./reverseString');
// const { test } = require('picomatch');

test('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh')
});
