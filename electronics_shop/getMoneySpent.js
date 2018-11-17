// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
    let money_spent = -1;
    for(let keyboard of keyboards){
        for(let drive of drives){
            if(keyboard + drive <= b && keyboard+drive > money_spent){
                money_spent = keyboard+drive;
            }
        }
    }
    return money_spent;
}
module.exports = getMoneySpent;