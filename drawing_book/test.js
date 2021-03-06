var pageCount = require("./drawing_book");

test('should return 1 for page 2 of 6', () => {
    expect(pageCount(6, 2)).toEqual(1);
});

test('should return 0 for page 4 of 5', () => {
    expect(pageCount(5, 4)).toEqual(0);
});

test('should return 2 for page 4 of 7', ()=>{
    expect(pageCount(7, 4)).toEqual(1);
});

test('should return 2 for page 4 of 10', ()=>{
    expect(pageCount(10, 2)).toEqual(1);
});
test('should return 1 for page 8 of 10', ()=>{
    expect(pageCount(10, 8)).toEqual(1);
});

test('should return 2 for page 6 of 10', ()=>{
    expect(pageCount(10, 6)).toEqual(2);
});

test('should return 2 for page 6 of 11', ()=>{
    expect(pageCount(11, 6)).toEqual(2);
});

test('should return 2 for page 5 of 10', ()=>{
    expect(pageCount(10, 5)).toEqual(2);
});


