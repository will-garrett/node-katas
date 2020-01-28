const wordSearch = require("./words");

test('should determine if a word of 8 letters or less', () => {
  expect(wordSearch.isAWord("starting")).toEqual(true);
  expect(wordSearch.isAWord("quizzical")).toEqual(false);
});
test('should remove letters from an index position', () => {
  expect(wordSearch.removeAtIndex(0, "starting")).toEqual("tarting");
  expect(wordSearch.removeAtIndex(1, "starting")).toEqual("sarting");
  expect(wordSearch.removeAtIndex(2, "starting")).toEqual("strting");
  expect(wordSearch.removeAtIndex(3, "starting")).toEqual("stating");
  expect(wordSearch.removeAtIndex(4, "starting")).toEqual("staring");
  expect(wordSearch.removeAtIndex(5, "starting")).toEqual("startng");
  expect(wordSearch.removeAtIndex(6, "starting")).toEqual("startig");
  expect(wordSearch.removeAtIndex(7, "starting")).toEqual("startin");
});
test('should produce at least starting->staring->string->sting->sing->sin->in->i', () => {
  expect(wordSearch.eightLetterMagic()).toEqual({});
});