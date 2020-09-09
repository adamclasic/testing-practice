const caesar = require('./caesar');

test('return an array of numbers' , () => {
  expect(caesar('JLKJL;', 5)).toBe('EGFEG6');
});