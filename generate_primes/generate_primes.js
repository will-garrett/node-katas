function generate_primes(limit, start = 2){
  let count = 0;
  let primes = [];
  while(primes.length < limit){
    if(isPrime(start)){
      primes.push(start);
    }
    start++;
  }
  return primes;
}

function isPrime(number) {
  let start = 2;
  const limit = Math.sqrt(number);
  while (start <= limit) {
      if (number % start++ < 1) return false;
  }
  return number > 1;
}

module.exports = generate_primes;