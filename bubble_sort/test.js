var bubble = require("./bubble");

test('should [3,9,1,4,7]', () => {
    let test = bubble([3,9,1,4,7]);
    expect(test).toEqual([1,3,4,7,9]);

});