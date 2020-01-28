/*

Given two arrays arr1[] and arr2[] of sizes N and M where 0 ≤ arr1[i], 
arr2[i] ≤ 1000 for all valid i, the task is to take one element from first array 
and one element from second array such that both of them are ugly numbers. 
We call it a pair (a, b). You have to find the count of all such distinct pairs. 
Note that (a, b) and (b, a) are not distinct.
Ugly numbers are numbers whose only prime factors are 2, 3 or 5.
The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, ….. shows first few ugly numbers. 
By convention, 1 is included.

Examples:

Input: arr1[] = {7, 2, 3, 14}, arr2[] = {2, 11, 10}
Output: 4
All distinct pairs are (2, 2), (2, 10), (3, 2) and (3, 10)

Input: arr1[] = {1, 2, 3}, arr2[] = {1, 1}
Output: 3
All distinct pairs are (1, 1), (1, 2) and (1, 3)

First generate all ugly numbers and insert them in a unordered_set s1.
Take another empty set s2.
Run two nested loops to generate all possible pairs from the 
two arrays taking one element from first array(call it a) and one from second array(call it b).

*/


function generate_primes(limit, start = 2) {
  let count = 0;
  let primes = [];
  while (primes.length < limit) {
    if (isPrime(start)) {
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


function isUgly(num){
  let avail_primes = generate_primes(num, 6);
  let uglyable = (num % 3 == 0 || num % 2 == 0 || num % 5 == 0 || num == 1) ;
  for(let i = 0; i < avail_primes.length; i++){
    if(num % avail_primes[i] == 0){
      return false
    }
  }
  return uglyable;
}

function uglyPairs(arr1, arr2){
  let pairs = [];
  for(let a of arr1){
    if(isUgly(a)){
      for(let b of arr2){
        if(isUgly(b)){
          pairs.push([a, b]);
        }
      }
    }
  }  
  return pairs;
}

console.log(uglyPairs([1, 2, 4, 7, 11, 12], [3, 61, 2, 39, 1000]));