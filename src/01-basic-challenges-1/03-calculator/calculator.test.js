const calculator = require('./calculator');

const num1 = 6;
const num2 = 2;

describe('Addition', () => {
  test(`adds ${num1} + ${num2} to equal ${num1 + num2}`, () => {
    const Addition = calculator(num1, num2, '+');
    expect(Addition).toBe(8);
  });
});

const Subtraction = calculator(num1, num2, '-');
expect(Subtraction).toBe(4);

const Multiplication = calculator(num1, num2, '*');
expect(Multiplication).toBe(12);

const Division = calculator(num1, num2, '/');
expect(Division).toBe(3);

expect(() => {
  calculator(num1, num2, '0');
}).toThrow('Invalid Operator');

// test('should throw an error if called with wrong operator', () => {
//   expect(() => {
//     calculator(num1, num2, '0');
//   }).toThrow('Invalid Operator');
// });

// describe('Calculator Tests', () => {
//   test(`adds ${num1} + ${num2} to equal ${num1 + num2}`, () => {
//     expect(calculator(num1, num2, '+')).toBe(8);
//   });

//   test(`subtracts ${num1} - ${num2} to equal ${num1 - num2}`, () => {
//     expect(calculator(num1, num2, '-')).toBe(4);
//   });

//   test(`multiplies ${num1} * ${num2} to equal ${num1 * num2}`, () => {
//     expect(calculator(num1, num2, '*')).toBe(12);
//   });

//   test(`divides ${num1} / ${num2} to equal ${num1 / num2}`, () => {
//     expect(calculator(num1, num2, '/')).toBe(3);
//   });

//   test('throws an error if called with an invalid operator', () => {
//     expect(() => {
//       calculator(num1, num2, '0');
//     }).toThrow('Invalid Operator');
//   });
// });
