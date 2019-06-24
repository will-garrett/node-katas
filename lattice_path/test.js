var latticePaths = require("./lattice");

test('should work for a 2 x 3 lattice', () => {
  let example = latticePaths(2, 3);
  expect(example).toEqual(10);
});

test('should return the same for a 3 x 2 lattice', () => {
  let example = latticePaths(3, 2);
  expect(example).toEqual(10);
});

test('should work for a 0 x 0 lattice', () => {
  let example = latticePaths(0, 0);
  expect(example).toEqual(1);
});

test('should work for a 10 x 10 lattice (square input)', () => {
  let example = latticePaths(10, 10);
  expect(example).toEqual(184756);
});

test('should work for a 20 x 15 lattice (large input)', () => {
  let example = latticePaths(20, 15);
  expect(example).toEqual(3247943160);
});

test('should work for a 35 x 40 lattice (large input)', () => {
  let example = latticePaths(35, 38);
  expect(example).toEqual(827114477843191400000);
});
