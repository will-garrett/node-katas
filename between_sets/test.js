var betweenSets = require("./betweenSets");

test('should return 3', () => {
    expect(betweenSets([2,4],[16,32,96])).toEqual(3);
});