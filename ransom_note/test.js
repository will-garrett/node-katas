var ransom = require("./ransom_note");

test("Ransom note test 1", ()=>{
    expect(ransom("give me one grand today night", "give one grand today")).toEqual("Yes");
});
test("Ransom note test 2", ()=>{
    expect(ransom("two times three is not four", "two times two is four")).toEqual("No");
});
test("Ransom note test 3", ()=>{
    expect(ransom("ive got a lovely bunch of coconuts", "ive got some coconuts")).toEqual("No");
});
