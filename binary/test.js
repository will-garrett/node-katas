const binme = require("./binary");

test('should return a bin', () => {
    expect(binme(12)).toEqual("1100");
});
test('should return a bin for 5', () => {
    expect(binme(5)).toEqual("101");
});

test('should return a bin for 13', () => {
    expect(binme(13)).toEqual("1101");
});
test('should return a bin for 500', () => {
    expect(binme(500)).toEqual("111110100");
});
test('should return a bin for 439', () => {
    expect(binme(439)).toEqual("110110111");
});
