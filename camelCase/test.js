var ccc = require("./camelCaseCounter");

test('should return 0 for empty string', () => {
  expect(ccc('')).toEqual(0);
});


test('should return 1 no camels', () => {
  expect(ccc('should')).toEqual(1);
});

test('should return 2 for one camel', () => {
  expect(ccc('shouldWork')).toEqual(2);
});

test('should return 3 for two camel', () => {
  expect(ccc('shouldWorkAgain')).toEqual(3);
});