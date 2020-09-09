const calculator  = require('./calculator');

test('calculate the addition' , () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test('calculate the subtraction' , () => {
  expect(calculator.subtract(2, 2)).toEqual(0);
});

test('calculate the divide' , () => {
  expect(calculator.divide(2, 2)).toEqual(1);
});

test('calculate multiply' , () => {
  expect(calculator.multiply(2, 2)).toEqual(4);
});