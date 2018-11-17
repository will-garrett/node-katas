var catAndMouse = require("./catnmouse");

test('should return Cat A', () => {
    expect(catAndMouse(2,1,3)).toEqual("Cat A");
});
test('should return Cat B', () => {
    expect(catAndMouse(1,2,3)).toEqual("Cat B");
});
test('should return Mouse C (cause the cats arrive same time)', () => {
    expect(catAndMouse(1,3,2)).toEqual("Mouse C");
});
test('should return Mouse C (cause the cats arrive same time)', () => {
    expect(catAndMouse(5,5,1)).toEqual("Mouse C");
});
test('should return Mouse C (cause the cats arrive same time)', () => {
    expect(catAndMouse(0,10,5)).toEqual("Mouse C");
});
test('should return Cat B', () => {
    expect(catAndMouse(0,11,7)).toEqual("Cat B");
});