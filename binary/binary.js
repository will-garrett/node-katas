function binary(n){
    let s = "";
    while(n > 0){
        s =  ( (n % 2 ) === 0 ? "0" : "1") + s;
        n = Math.floor(n / 2);
    }
    return s;
}
module.exports=binary;