function diagonal_difference(arr){
    let max = arr.length-1;
    
    let sum_1 = 0;
    let sum_2 = 0;

    for(let i = 0; i<=max; i++){
        sum_1+=arr[i][i];
        sum_2+=arr[i][max-i];
    }    
    return Math.abs(sum_1 - sum_2);
}

module.exports = diagonal_difference;