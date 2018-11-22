// https://www.hackerrank.com/challenges/picking-numbers/problem
/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let arrays = Array(100).fill(0);
    for(let i of a){
        arrays[i]++;
    }
    let sizeof = 0;
    for(let i = 2; i<arrays.length; i++){
        if(sizeof < arrays[i] + arrays[i-1]){
            sizeof = arrays[i]+arrays[i-1];
        }
    }
    return sizeof;
}
module.exports = pickingNumbers;