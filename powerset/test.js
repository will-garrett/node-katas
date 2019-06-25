var powerSet = require("./power");

test('should ', () => {
  expect(powerSet('abc')).toEqual(['','a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']);
});