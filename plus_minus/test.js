//http://hr.gs/ceffdc

var plus_minus = require("./plus_minus");

test("Plus Minus test 1", ()=>{
    expect(plus_minus([-4, 3, -9, 0, 4, 1])).toEqual([3/6, 2/6, 1/6]);
});
