function minmaxsum(arr){
    let min;
    let max;
    for(let i in arr){
        let count = 0;
        for(let j in arr){
            if(i != j){
                count+=arr[j];
            }
        }
        if(count < min || min == null){
            min = count;
        }
        if(count > max || max == null){
            max = count;
        }
    }
    return [min, max];
}
module.exports=minmaxsum;