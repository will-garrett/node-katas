var utopian = require("./utopian_tree");

 test('should return 7', () => {
    expect(utopian(4)).toEqual(7); 
 });

test('should return 14', () => {
    expect(utopian(5)).toEqual(14); 
 });