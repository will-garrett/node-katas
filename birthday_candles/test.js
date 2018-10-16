var birthday = require("./birthday_can");
test("Birthday candle test 1", ()=>{
    expect(birthday([3, 2, 1, 3])).toEqual(2);
});

test("Birthday candle test 2", ()=>{
    expect(birthday([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])).toEqual(5);
});
//
//[3, 2, 1, 3]