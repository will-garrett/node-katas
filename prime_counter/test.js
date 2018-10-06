
const prime_counter = require('./index');

test('Correctly identifies count of prime numbers between two values ', () => {
    
    expect(prime_counter(5, 10)).toEqual(2);
    expect(prime_counter(5, 15)).toEqual(4);
    
});