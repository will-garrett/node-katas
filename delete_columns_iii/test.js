const deleteColumns = require("./delete_col3");

test('should return minimum number of deleted columns', () => {
  expect(deleteColumns("babca")).toEqual(3);
  expect(deleteColumns("bbazb")).toEqual(3);
  expect(deleteColumns("edcba")).toEqual(4);
  expect(deleteColumns("ghi")).toEqual(0);
  expect(deleteColumns("def")).toEqual(0);
  expect(deleteColumns("abc")).toEqual(0);
});