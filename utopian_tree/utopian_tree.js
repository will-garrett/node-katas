// https://www.hackerrank.com/challenges/utopian-tree/problem
function utopianTree(n) {
    let init_height = 1;
    for(i = 0; i<n; i++){
        if(i%2 == 0){
            init_height*=2;
        }
        else{
            init_height = init_height+1;
        }
    }
    return init_height;

}
module.exports = utopianTree;