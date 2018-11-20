var qa2 = require("./qa2");

test('should return total squares 9', () => {
    expect(qa2(4, 0, 4, 4, [])).toEqual(9);
});

test('should return total squares 9', () => {
    expect(qa2(4, 0, 4, 1, [])).toEqual(9);
});

test('should return total squares 11', () => {
    expect(qa2(4, 0, 3, 2, [])).toEqual(11);
});

test('should return total squares 10', () => {
    expect(qa2(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])).toEqual(10);
});
test('should return total squares 0', () => {
    expect(qa2(1, 0, 1, 1, [])).toEqual(0);
});
test('should return total squares 8', ()=>{
    expect(qa2(30, 8, 15, 15, [[17,15],[17,17],[15,17],[13,17],[13,15],[13,13],[15,13],[17,13]])).toEqual(8);
});