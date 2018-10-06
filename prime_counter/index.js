function prime_counter(x, y){   
    let count = 0;
    for(i = x; i <= y; i++) {
        if(isPrime(i)){
            count++;
        }          
    }
    return count;
}
function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}
module.exports = prime_counter;