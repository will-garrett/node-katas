var count_valleys = require("./count_valleys");

test("Count the number of valleys test 1", ()=>{
    expect(count_valleys(8, "UDDDUDUU")).toEqual(1);
});