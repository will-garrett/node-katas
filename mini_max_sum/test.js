var minmaxsum = require("./minmaxsum");

test("Min Max Sum - test 1", ()=>{
    expect(minmaxsum([1,3,5,7,9])).toEqual([16, 24]);
});

test("Min Max Sum - test 1", ()=>{
    expect(minmaxsum([1,2,3,4,5])).toEqual([10, 14]);
});