const highestVersion = require("./semantic");

test('should return 3.9.5 over 3.9.1', () => {
  expect(highestVersion("3.9.1", "3.9.5")).toEqual("3.9.5");
  expect(highestVersion("3.9.5", "3.9.1")).toEqual("3.9.5");
});

test('should return 3.10 over 3.9.9', () => {
  expect(highestVersion("3.10", "3.9.9")).toEqual("3.10");
  expect(highestVersion("3.9.9", "3.10")).toEqual("3.10");
});

test('should return 3.9 over 3.9b', () => {
  expect(highestVersion("3.9", "3.9b")).toEqual("3.9");
  expect(highestVersion("3.9b", "3.9")).toEqual("3.9");
});

test('should return 3.9a over 3.9b', () => {
  expect(highestVersion("3.9a", "3.9b")).toEqual("3.9b");
  expect(highestVersion("3.9b", "3.9a")).toEqual("3.9b");
});