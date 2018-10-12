var diagonal_diff = require("./diagonal_diff");

test("Diagonal Difference - Test 1", ()=>{
    expect(diagonal_diff([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])).toEqual(15);
});