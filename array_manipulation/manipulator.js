// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function manipulator(n, queries){
    let result_arr = Array.apply(null, Array(n)).map(Number.prototype.valueOf,0);
    for(let query of queries){
        let range_a = query[0]-1;
        let range_b = query[1]-1;
        let amt = query[2];
        for(let i=range_a; i <= range_b; i++){
            result_arr[i]+=amt;
        }
    }
    let max = result_arr[0];
    for(let j of result_arr){
        if(j > max){
            max = j;
        }
    }
    return max;
}
module.exports=manipulator;