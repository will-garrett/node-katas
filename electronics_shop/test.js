var getMoneySpent = require("./getMoneySpent");

test('should return 9 for budget of 10', () => {
    expect(getMoneySpent([3, 1],[5, 2, 8], 10)).toEqual(9);
});
test('should return -1 for budget of 5', () => {
    expect(getMoneySpent([4],[5],5)).toEqual(-1);
});