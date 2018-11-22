var viral_advert = require("./viral_count");

test('should return 24', () => {
    expect(viral_advert(5)).toEqual(24);
});
test('should return 9', () => {
    expect(viral_advert(3)).toEqual(9);
});
test('should return 15', () => {
    expect(viral_advert(4)).toEqual(15);
});