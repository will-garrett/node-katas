// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
    let digits = String(n).split('');
    let count = 0;
    for (const i of digits) {
        let digit = parseInt(i);
        if(digit != 0){
            if(n % digit == 0){
                count++;
            }
        }
    }
    return count;
}
module.exports = findDigits;