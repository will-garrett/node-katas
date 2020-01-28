const allPaths = require("./allPathsSourceTarget");

test('should return all directions', () => {
  let inputs = [[1,2],[3],[3],[]];
  expect(allPaths(inputs)).toEqual([[0,1,3],[0,2,3]]);
});

test('should return all directions', () => {
  let inputs = [[1,2,3],[4,5,5],[5],[6],[6],[6],[]];
  expect(allPaths(inputs)).toEqual([[0,1,4,6],[0,1,5,6],[0,1,5,6],[0,2,5,6],[0,3,6]]);
});


test('should ', () => {
  let inputs = [[1,2,3],[4],[4],[5],[6],[6],[]];
  expect(allPaths(inputs)).toEqual([[0,1,4,6],[0,2,4,6],[0,3,5,6]]);
});