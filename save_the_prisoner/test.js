var prisoner = require("./prisoner");

test('should return 3', () => {
    expect(prisoner(4,6,2)).toEqual(3);
});
test('should return 2', () => {
    expect(prisoner(5, 2, 1)).toEqual(2);
});

test('should return 3', () => {
    expect(prisoner(5, 2, 2)).toEqual(3);
});
test('should return 6', () => {
    expect(prisoner(7, 19, 2)).toEqual(6);
});
test('should return 3', () => {
    expect(prisoner(3, 7, 3)).toEqual(3);
});