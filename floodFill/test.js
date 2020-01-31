// https://leetcode.com/problems/flood-fill/

const floodFill = require("./floodFill");

test('should flood fill a 3x3', () => {
  expect(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
  .toEqual([[2,2,2],[2,2,0],[2,0,1]]);
});

test('should flood fill a 3x2', () => {
  let image = [ 
    [ 0, 0, 0 ], 
    [ 0, 1, 1 ]
  ];
  expect(floodFill([[0,0,0],[0,1,1]], 1, 1, 1))
  .toEqual([[0,0,0],[0,1,1]]);
});