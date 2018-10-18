let factorial = require("./index");

test('should return a factorial', () => {
    expect(factorial(3)).toEqual(6);
});