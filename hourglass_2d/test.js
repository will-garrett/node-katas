var hourglass = require("./hourglass_2d");

test("Hourglass 2D - test 0", ()=>{
    let a = [
        [1, 1, 1, 0, 0, 0], // 0
        [0, 1, 0, 0, 0, 0], // 1
        [1, 1, 1, 0, 0, 0], // 2
        [0, 0, 2, 4, 4, 0], // 3
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];
    expect(hourglass(a)).toEqual(19);
});