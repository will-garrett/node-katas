var angry_prof = require("./angry_prof");

test('should return NO for threshold 5 with all students arriving on time', () => {
    expect(angry_prof(5, [0,0,0,0,0])).toEqual("NO");
});
test('should return YES for threshold 5 with all students arriving late', () => {
    expect(angry_prof(5, [1,2,3,5,5])).toEqual("YES");
});
test('should return NO for threshold 3 with the threshold met', () => {
    expect(angry_prof(3, [-1,-1,0,2,3])).toEqual("NO");
});
test('should return YES for threshold 3 with the threshold not met', () => {
    expect(angry_prof(3, [-1,-1,1,2,3])).toEqual("YES");
});