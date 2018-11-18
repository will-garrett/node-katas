var magic_square = require("./magic_square");

test('should return cost of magic square ', () => {
    expect(magic_square([[4, 9, 2],[3, 5, 7],[8, 1, 5]])).toEqual(1);
});
test('should return cost of magic square ', () => {
    expect(magic_square([[4, 8, 2],[4, 5, 7],[6, 1, 6]])).toEqual(4);
});
