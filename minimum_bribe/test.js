var minimum_bribe = require("./minimum_bribe");

test("Minimum bribe - test 1", ()=>{
    expect(minimum_bribe([1,2,3,5,4,6,7,8])).toEqual(1);
});
