const fnl = require("./firstlast");
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/

test('should return [3,4] for ([5,7,7,8,8,10], 8)', () => {
  expect(fnl([5,7,7,8,8,10], 8)).toEqual([3,4]);
});

test('should return [3,4] for ([5,7,7,8,8,10], 6)', () => {
  expect(fnl([5,7,7,8,8,10], 6)).toEqual([-1,-1]);
});

test('should return [3,6] for ([5,7,7,8,8,10], 8)', () => {
  expect(fnl([5,7,7,8,8,8,8,10], 8)).toEqual([3,6]);
});

test('should return [0,0] for ([1], 1)', () => {
  expect(fnl([1], 1)).toEqual([0,0]);
});
test('should return [1,1] for ([1,4], 4)', () => {
  expect(fnl([1,4], 4)).toEqual([1,1]);
});

/**
 * [1,2,3] 3
 */