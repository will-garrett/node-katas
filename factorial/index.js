function factorial(n) {
    if(n > 0){
        //console.log(n);
        return n * factorial(n - 1);
    }
    else{
        return 1;
    }
}
module.exports = factorial;