// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
/**
 * @name interative_fib
 * @description Provides a linear complex O(n)
 * @param {interger} n
 * @returns {int} the nth fibonacci number 
 */
function iterative_fib(n){
    /// O(n)
    let result = [0,1];
    for(let i=2; i<=n; i++){
        result.push(result[i-1]+result[i-2]);
    }
    return result.pop();
}
/**
 * memoizer
 * @description stores the arguments of each func. call along with
 * result. If the function is called again with the same arguments, return the
 * precomputed result, rather than running the function again.
 * @param {function} fn 
 */
function memoizer(fn){
    
    const cache = {};

    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

/**
 * @description Recursive fibonacci solution
 *   - Exponential Time (2^N)
 *   - Improved with memoization
 * @param {interger} n 
 */
function recursive_fib(n) {

    if(n < 2){
        return n;
    }
    
    else{
        return recursive_fib(n-1) + recursive_fib(n-2);
    }
}

/**
 * @description memoization solution
*/
 const fib = memoizer(recursive_fib);


/**
 * @function fib(n)
 * @param {interger} n
 * @returns {interger} 
 */

 /*
function fib(n){
    return recursive_fib(n);
    return iterative_fib(n);
}
*/


module.exports = fib;

