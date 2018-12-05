// https://www.hackerrank.com/challenges/kaprekar-numbers/problem


function kaprekarNumbers(p, q) {
    /**
     * Finds kaprekar numbers in a given range p to q
     */
    let found_numbers = [];
    for(let i = p; i <= q; i++){
        if(i == 1){
            found_numbers.push(i);
            continue;
        }
        let square = String(i**2);
        let limit = 0
        if(square.length % 2 == 0){
            limit = square.length / 2;
        }
        else{
            limit = Math.floor(square.length/2);
        }        
        let left = parseInt(square.slice(0,limit));
        let right = parseInt(square.slice(limit));
        if(left+right == i){
            found_numbers.push(i);
        }

    }
    return found_numbers.length > 0 ? found_numbers : 'INVALID RANGE'    
}
module.exports = kaprekarNumbers;
