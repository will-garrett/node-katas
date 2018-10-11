jumpingOnClouds = require('./jumpingOnClouds');

test('Jumping on clouds - test 1', () => {
    expect(jumpingOnClouds([0,0,1,0,0,1,0])).toEqual(4);
});
test('Jumping on clouds - test 2', () => {
    expect(jumpingOnClouds([0,0,0,0,1,0])).toEqual(3);
});