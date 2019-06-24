var lolsub = require("./lengthOfLongestSubstring");

test('should return "abc"', () => {
  let a = "abcacbcbb";
  expect(lolsub(a)).toEqual(3); // "abc"
});

test('should return "bbbbb"', () => {
  let b = "bbbbb";
  expect(lolsub(b)).toEqual(1); // "b"
});
/*
h : p

 p w w k e w
 0 1 2 3 4 5

*/

test('should return "pwwkew"', () => {
  let p = "pwwkew";
  expect(lolsub(p)).toEqual(3);
});

test('should return "dacdbrdeb"', () => {
  let d = "dacdbrdeb";
  expect(lolsub(d)).toEqual(5);
});
