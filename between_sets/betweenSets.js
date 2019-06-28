// https://www.hackerrank.com/challenges/between-two-sets/problem
function getTotalX(a, b) {
    
    for(let a_s of a){
        
    }
}
function lcm(a, b){
    if(a == 0 || b == 0){
        return 0;
    }
    return (a * b) / gcd(a, b);
}
function gcd(a, b){
    let r = 0;
    do {
        r = a % b;
        a = b;
        b = r;
    } while (b != 0);
    return a;
}
module.exports = getTotalX;