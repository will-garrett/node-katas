// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    return calcDays(n, 5);
}
function calcDays(daysLeft, numReceived){
    if(daysLeft == 0){
        return 0;
    }
    let numWhoLike = Math.floor(numReceived / 2);

    return numWhoLike + calcDays(daysLeft - 1, numWhoLike * 3);
}

module.exports = viralAdvertising;