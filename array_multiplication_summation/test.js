const ams = require("./ams");

test('should multiply correctly [1,2,[3,4],5]', () => {
  let arr = [1,2,[3,4],5];
  let result =  1 + 2 + ((3+4)*2) + 5;
  expect(ams(arr)).toEqual(result);
});

test('should multiple correctly [[[2,3]],2]', () => {
  let arr = [[[2,3]],2];
  let result =  ((2+3)*3)+2;
  expect(ams(arr)).toEqual(result);
});