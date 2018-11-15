// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function divisibleSumPairs(ar, k, n=ar.length) {
    let pairs = [];
    for(let j=0; j<ar.length; j++){
        for(let i=j; i<ar.length; i++){
            if(i != j){
                //console.log(i, ar[i], j, ar[j], k);
                if((ar[i]+ar[j]) % k == 0){
                    pairs.push([ar[i], ar[j]]);
                }
            }
        }
    }
    return pairs.length;

}
module.exports=divisibleSumPairs;