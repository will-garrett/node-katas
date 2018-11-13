function pageCount(n,p){
    // CALC FORWARD AMT

    let forward = (p-1)/2;
    if(p%2 == 0){
        forward = Math.ceil(forward);
    }
    let backward = 0
    if(n%2 == 0 && p%2 == 0){
        backward = ((n-p)/2);
    }
    else if(n%2 != 0 && p%2 == 0){
        backward = Math.floor((n-p)/2);    
    }
    else if(n%2 == 0 && p%2 != 0){
        backward = Math.ceil((n-p)/2);
    }
    else{
        backward = ((n-p)/2);
    }
    let calc = (backward > forward) ? forward : backward;
    
    console.log("N:",n, "P:", p, "F:",forward, "B", backward);
    return calc;
}
module.exports=pageCount;