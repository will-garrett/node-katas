var findDigits = require("./find_digits");

test('should return 2 from 12', () => {
    expect(findDigits(12)).toEqual(2);
});
test('should return 3 from 1012', () => {
    expect(findDigits(1012)).toEqual(3);
});