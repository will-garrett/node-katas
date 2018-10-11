rotLeft = require("./array_rotate");
test("Rotate Left Array - test 1", ()=>{
    expect(rotLeft([1,2,3,4,5], 2)).toEqual([3,4,5,1,2]);
});

test("Rotate Left Array - test 2", ()=>{
    expect(rotLeft([1,2,3,4,5], 4)).toEqual([5,1,2,3,4]);
});