var cavityMap = require("./cavityMap");

test('should return array with X', () => {
    let grid = [[1,1,1,2],[1,9,1,2],[1,8,9,2],[1,2,3,4]];
    expect(cavityMap(grid)).toEqual([[1,1,1,2],[1,"X",1,2],[1,8,"X",2],[1,2,3,4]]);
});