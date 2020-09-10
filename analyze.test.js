const analyze = require('./analyze');

test('calculate the addition', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyze([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});
