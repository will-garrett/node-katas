var kaprekar = require("./kaprekarNums");

test('should return 1, 9, 45, 55, 99', () => {
    expect(kaprekar(1, 100)).toEqual([1,9,45,55,99]);
});

test('should return INVALID RANGE', () => {
    expect(kaprekar(2, 8)).toEqual('INVALID RANGE');
});
test('should 45, 55', () => {
    expect(kaprekar(45, 55)).toEqual([45,55]);
});
test('should return 1', () => {
    expect(kaprekar(1,2)).toEqual([1]);    
});
test('should return 297', () => {
    expect(kaprekar(100,300)).toEqual([297]);
});