function pageCount(n,p){
    if(n-p < p){
    // REVERSE CALC
//        return Math.floor(n-p / 2);
        if(p % 2 != 0){
            p--;
        }
        return ;
    }

    /* NUM PAGES FROM BEGINNING */
    if(p % 2 == 0){
        return p/2;
    }
    else{
        return (p-1)/2;
    }
}
module.exports=pageCount;