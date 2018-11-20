// https://www.hackerrank.com/challenges/bon-appetit/problem
function bonAppetit(bill, k, b) {
    let should_pay = 0;
    for(item in bill){
        if(item != k){
            should_pay+=bill[item];
        }
    }
    return b-(should_pay/2) == 0 ? "Bon Appetit" : b-(should_pay/2);
}
module.exports = bonAppetit;