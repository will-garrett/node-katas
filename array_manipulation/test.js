const array_manipulation = require("./manipulator");

test('should perform queries on an array of zeros and return the largest value', () => {
    expect(array_manipulation(5, [[1,2, 100], [2, 5, 100], [3, 4, 100]])).toEqual(200);
});


test('should perform queries on an array of zeros and return the largest value', () => {
    expect(array_manipulation(10, [[1,5,3],[4,8,7], [6,9,1]])).toEqual(10);
});

test('should perform queries on an array of zeros and return the largest value', () => {
    expect(array_manipulation(10, [[2,6,8],[3,5,7],[1,8,1],[5,9,15]])).toEqual(31);
});