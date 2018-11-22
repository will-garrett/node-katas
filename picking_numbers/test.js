var pickingNumbers = require("./pickingNumbers");

test('should return 3', () => {
    expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toEqual(3);
});
test('should return 5', () => {
    expect(pickingNumbers([1, 2, 2, 3, 1, 2])).toEqual(5);
});

test('should return 5', () => {
    expect(pickingNumbers([1, 2, 2, 5, 5, 6, 6, 5, 9, 1, 2, 5])).toEqual(6);
});