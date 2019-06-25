var kth = require("./kth_number");

test(`should return "12" for the largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 1);
  expect(result).toEqual(12);
});

test(`should return "9" for 2nd largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 2);
  expect(result).toEqual(9);
});
test(`should return "8" for 3rd largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 3);
  expect(result).toEqual(8);
});


test(`should return "7" for 4th largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 4);
  expect(result).toEqual(7);
});

test(`should return "5" for 5th largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 5);
  expect(result).toEqual(5);
});
test(`should return "4" for 6th largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 6);
  expect(result).toEqual(4);
});

test(`should return "3" for 7th largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 7);
  expect(result).toEqual(3);
});

test(`should return "2" for 8th largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 8);
  expect(result).toEqual(2);
});

test(`should return "1" for 9th largest`, () => {
  let dataset = [8, 7, 3, 5, 9, 12, 4, 2, 1];
  let expectation = [1, 2, 3, 4, 5, 7, 8, 9, 12];
  let result = kth(dataset, 9);
  expect(result).toEqual(1);
});