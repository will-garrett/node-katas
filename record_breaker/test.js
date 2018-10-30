const breakingRecords = require("./index");

test('should calc stuff records given an array of scores #1', () => {
   expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([4,0]);
});

test('should calc stuff records given an array of scores #2', () => {
    expect(breakingRecords([3, 4, 15, 10, 0])).toEqual([2,1]);
});
test('should calc stuff records given an array of scores #3', ()=>{
    expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2,4]);
});