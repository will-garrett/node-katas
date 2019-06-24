var minDist = require("./minimum_dist");

test('should return 3', () => {
  expect(minDist([7, 1, 3, 4, 1, 7])).toEqual(3);
});

test('should return -1', () => {
  expect(minDist([1, 2, 3, 4, 10])).toEqual(-1);
});
