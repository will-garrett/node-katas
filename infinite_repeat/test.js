var infinite_repeat = require('./infinite_repeat');

test('Infinite repeating string problem - test 1', ()=>{
    expect(infinite_repeat("aba", 10)).toEqual(7);
});
test('Infinite repeating string problem - test 2', ()=>{
    expect(infinite_repeat("a", 1000000000000)).toEqual(1000000000000);
});

test('Infinite repeating string problem - test 3', ()=>{
    expect(infinite_repeat("abcac", 10)).toEqual(4);
});