var appleNOranges = require("./countApplesAndOranges");

test('should count apples and oranges test 1', () => {
    expect(appleNOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toEqual([1,1])
});
test('should count apples and oranges test 2', () => {
    expect(appleNOranges(7, 10, 4, 12, [2, 3, -4], [3,-2,-4])).toEqual([1,2])
});
