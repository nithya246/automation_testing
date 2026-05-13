const { appStarts } = require('./utils');

test('Smoke Test - Website loads successfully', () => {
  expect(appStarts()).toBe(true);
});