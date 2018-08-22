const fib = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});
test('calculates correct fib value for 41', () => {
  expect(fib(41)).toEqual(165580141);
});
test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib(4)).toEqual(3);
});
test('calculates correct fib value for 5', () => {
  expect(fib(5)).toEqual(5);
});
test('calculates correct fib value for 15', () =>{
  expect(fib(15)).toEqual(610);
});


test('calculates correct fib value for 39', () => {
  expect(fib(39)).toEqual(63245986);
});


test('calculates correct fib value for 40', () => {
  expect(fib(40)).toEqual(102334155);
});