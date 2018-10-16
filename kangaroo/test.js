var kangaroo = require("./kangaroo");

test('should collide', () => {
    expect(kangaroo(0,3,4,2)).toEqual("YES");
});
test('should not collide', () => {
    expect(kangaroo(0,2,5,3)).toEqual("NO");
});