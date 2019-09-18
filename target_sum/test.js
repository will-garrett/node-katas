const target_sum = require("./target_sum");

test('should return [1,3] for first([2,4,6,5,9], 9)', () => {
  expect(target_sum.first([2,4,6,5,9], 9)).toEqual([1,3]);
});

test('should return false for first([2,4,6,5,9], 12)', () => {
  expect(target_sum.first([2,4,6,5,9], 12)).toBeFalsy();
});

test('should return [1,4] false for first([2,4,6,5,9], 13)', () => {
  expect(target_sum.first([2,4,6,5,9], 13)).toEqual([1,4]);
});

test('should return [1,2] for first([1,2,3,4,5], 5)', () => {
  expect(target_sum.first([1,2,3,4,5], 5)).toEqual([1,2]);
});

test('should return [1,3] for first([1,2,3,4,5], 6)', () => {
  expect(target_sum.first([1,2,3,4,5], 6)).toEqual([1,3]);
});

test('should return [2,3] for first([1,2,3,4,5], 7)', () => {
  expect(target_sum.first([1,2,3,4,5], 7)).toEqual([2,3]);
});

test('should return all combos for all([1,2,3,4,5], 5)', () => {
  expect(target_sum.all([1,2,3,4,5], 5)).toEqual([[1,2], [0,3]]);
});

test('should return [[1,2], [0,3]] combos for all([1,2,3,4,5], 5)', () => {
  expect(target_sum.all([1,2,3,4,5], 5)).toEqual([[1,2], [0,3]]);
});

test('should return [[2,5],[1,6],[0,7]] combos for all([1,2,3,4,5,7,8,9,10], 10)', () => {
  expect(target_sum.all([1,2,3,4,5,7,8,9,10], 10)).toEqual([[2,5],[1,6],[0,7]]);
});

test('should return false for all([1,2,3,4,5,7,8,9,10], 22)', () => {
  expect(target_sum.all([1,2,3,4,5,7,8,9,10], 22)).toEqual(false);
});

test('should return [[3,5],[0,6],[1,7]] for all([7,8,5,9,10,1,3,2,4], 12)', () => {
  expect(target_sum.all([7,8,5,9,10,1,3,2,4], 10)).toEqual([[3,5],[0,6],[1,7]]);
});

test('should return [[10,1],[8,3],[9,2],[7,4]] for values of all([7,8,5,9,10,1,3,2,4], 11)', () => {
  expect(target_sum.all([7,8,5,9,10,1,3,2,4], 11, true)).toEqual([[10,1],[8,3],[9,2],[7,4]]);
});

test('should return [10,1] for first values of first([7,8,5,9,10,1,3,2,4], 11)', () => {
  expect(target_sum.first([7,8,5,9,10,1,3,2,4], 11, true)).toEqual([10,1]);
});

test('should return [7,4] for first values of first([7,8,5,9,4,1,3,2,10], 11)', () => {
  expect(target_sum.first([7,8,5,9,4,1,3,2,10], 11, true)).toEqual([7,4]);
});

test('should return [7,4] for first values of first([7,8,5,9,10,4,1,3,2], 11)', () => {
  expect(target_sum.first([7,8,5,9,10,4,1,3,2], 11, true)).toEqual([7,4]);
});
