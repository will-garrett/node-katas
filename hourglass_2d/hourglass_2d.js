//http://hr.gs/abbdcb
function hourglassSum(arr) {
    console.log(arr);
    var sum_table = {};
    let max = -63;
    for(let x=0; x < 4; x++){
        for(let y=0; y < 4; y++){
            let current = getHourSum(x,y,arr);
            if(current > max){
                max = current;
            }
        }
    }
    return max;
}
function getHourSum(x, y, arr){
    let sum = 0;
    
    // ROW ONE
    sum+=arr[x][y];
    sum+=arr[x][y+1];
    sum+=arr[x][y+2];
    // ROW TWO
    sum+=arr[x+1][y+1];
    
    // ROW THREE
    sum+=arr[x+2][y];
    sum+=arr[x+2][y+1];
    sum+=arr[x+2][y+2];

    return sum;
}
module.exports = hourglassSum;