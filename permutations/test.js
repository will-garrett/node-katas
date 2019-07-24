const permute = require("./permute");
describe('Permute strings', () => {
  test('should permute ABC', () => {
    let result = [
      'ABC',
      'ACB',
      'BAC',
      'BCA',
      'CBA',
      'CAB'
    ];
    expect(permute.stringPermute('ABC')).toEqual(result);
  });
  test('should permute ABCD', () => {
    let result = [
      "ABCD", "ABDC", "ACBD", "ACDB", "ADCB", "ADBC",
      "BACD", "BADC", "BCAD", "BCDA", "BDCA", "BDAC",
      "CBAD", "CBDA", "CABD", "CADB", "CDAB", "CDBA",
      "DBCA", "DBAC", "DCBA", "DCAB", "DACB", "DABC",
    ];
    expect(permute.stringPermute('ABCD')).toEqual(result);
  });
});

describe('Permute an array', () => {
  test('should permute [1,2,3]', ()=>{
    let result = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]];
    expect(permute.arrayPermute([1,2,3])).toEqual(result);
  });
  test('should permute [1,2,3,4]', ()=>{
    let result = [[1, 2, 3, 4], [1, 2, 4, 3], [1, 3, 2, 4], [1, 3, 4, 2], [1, 4, 3, 2], [1, 4, 2, 3], [2, 1, 3, 4], [2, 1, 4, 3], [2, 3, 1, 4], [2, 3, 4, 1], [2, 4, 3, 1], [2, 4, 1, 3], [3, 2, 1, 4], [3, 2, 4, 1], [3, 1, 2, 4], [3, 1, 4, 2], [3, 4, 1, 2], [3, 4, 2, 1], [4, 2, 3, 1], [4, 2, 1, 3], [4, 3, 2, 1], [4, 3, 1, 2], [4, 1, 3, 2], [4, 1, 2, 3]];
    expect(permute.arrayPermute([1,2,3,4])).toEqual(result);
  })
});

