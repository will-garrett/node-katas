//https://www.hackerrank.com/challenges/drawing-book/problem
function pageCount(n,p){
    let forward = (p-1)/2;
    if(p%2 == 0){
        forward = Math.ceil(forward);
    }
    let backward = ((n-p)/2);
    if(n%2 != 0 && p%2 == 0){
        backward = Math.floor(backward);    
    }
    else if(n%2 == 0 && p%2 != 0){
        backward = Math.ceil(backward);
    }
    return (backward > forward) ? forward : backward;
    //return calc;
}
module.exports=pageCount;