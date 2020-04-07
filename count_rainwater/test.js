// https://medium.com/javascript-in-plain-english/amazon-software-development-engineer-interview-questions-a40a6b092c3a

const countRain = require("./rainCounter");

describe('Count rainwater', () => {
  test('should output 6 for [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    let testArr =  [0,1,0,2,1,0,1,3,2,1,2,1];
    expect(countRain(testArr)).toEqual(6);
  });

  test('should output 6 for [0,1,1,0,2,2,1,0,1,3,3,2,1,2,1]', () => {
    let testArr =  [0,1,1,0,2,2,1,0,1,3,3,2,1,2,1];
    expect(countRain(testArr)).toEqual(6);
  });
  test('should output 21 for [0,1,1,3,2,2,1,0,1,2,3,3,2,1,2,1,5,0,5,2]', () => {
    let testArr =  [0,1,1,3,2,2,1,0,1,2,3,3,2,1,2,1,5,0,5,2];
    expect(countRain(testArr)).toEqual(21);
  });
  test('should output 15 for [5,0,0,0,5]', () => {
    let testArr = [5,0,0,0,5];
    expect(countRain(testArr)).toEqual(15);
  });
  test('should output 12 for [5,0,0,0,5,0,0,0]', () => {
    let testArr = [5,1,2,0,5,0,0,0];
    expect(countRain(testArr)).toEqual(12);

  });
  
});