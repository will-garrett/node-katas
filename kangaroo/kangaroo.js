//https://www.hackerrank.com/challenges/kangaroo/problem
function kangaroo(x1, v1, x2, v2) {

    if(v1 > v2 && !((x2-x1)%(v1-v2))){
        return "YES";
    }
    else{
        return "NO";
    }
}
module.exports = kangaroo;