var gen_primes = require("./generate_primes");

test('should generate 2 primes', () => {
  expect(gen_primes(2)).toEqual([2,3]);
});
test('should generate 3 primes', () => {
  expect(gen_primes(3)).toEqual([2,3,5]);
});

test('should generate 26 primes', () => {
  expect(gen_primes(26)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]);
      // A  B  C  D  E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z
      // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101
});
test('should generate 52 primes', () => {
  expect(gen_primes(52)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,
    103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239]);
});