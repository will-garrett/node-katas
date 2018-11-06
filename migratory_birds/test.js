var migratory = require("./migratory_bird");

test('should return the most frequent bird', () => {
    expect(migratory([1,3,3,3,4,5])).toEqual(3);    
});
test('should return the most frequent with lowest id', () => {
    expect(migratory([1,2,2,2,2,4,4,4,4,5,6])).toEqual(2);
});
test('should return 3', () => {
    expect(migratory([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toEqual(3);
});

test('should return 3', () => {
    expect(migratory([1, 4, 4, 4, 5, 3])).toEqual(4);
});

test('should return 2', () => {
    expect(migratory([1, 4, 2, 4, 2, 2, 4, 2, 4, 5, 3])).toEqual(2);
});
