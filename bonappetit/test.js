var bonappetit = require("./bonappetit");

test('should return Bon Appetit', () => {
    expect(bonappetit([2,4,6],2,3)).toEqual("Bon Appetit");
});

test('should return 3', () => {
    expect(bonappetit([2,4,6],2,6)).toEqual(3);
});

test('should return 5', () => {
    expect(bonappetit([3,10,2,9],1,12)).toEqual(5);
});

test('should return Bon Appetit', () => {
    expect(bonappetit([3,10,2,9],1,7)).toEqual("Bon Appetit");
});