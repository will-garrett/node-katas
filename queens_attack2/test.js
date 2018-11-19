var qa2 = require("./qa2");

test('should return total squares 9', () => {
    expect(qa2(4, 0, 4, 4, [])).toEqual(9);
});
test('should return total squares 10', () => {
    expect(qa2(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])).toEqual(10);
});
test('should return total squares 0', () => {
    expect(qa2(1, 0, 1, 1, [])).toEqual(0);
});
