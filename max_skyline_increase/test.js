/*
https://leetcode.com/problems/max-increase-to-keep-city-skyline/submissions/
*/

const skyline = require("./skyline");

describe('Skyline', () => {
  test('should collect skyline', () => {
    let grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
    expect(skyline(grid)).toEqual(35);
  });
});