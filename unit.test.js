const { calculateTotal } = require('./utils');

test('Unit Test - Cart total calculation', () => {
  expect(calculateTotal(500, 2)).toBe(1000);
});