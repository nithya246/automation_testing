const { validateLogin } = require('./utils');

test('Integration Test - Login validation', () => {
  expect(validateLogin("admin", "1234"))
    .toBe(true);
});