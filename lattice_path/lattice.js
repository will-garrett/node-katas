/// lattice paths

module.exports = function(m, n) {
  let memo = {};
  function traverse(x, y){
    let key = x+"_"+y;
    if(memo.hasOwnProperty(key)){
      return memo[key];
    }
    if(x == 0 && y == 0){
      return 1;
    }
    if(x < 0 || y < 0){
      return 0;
    }
    memo[key]=traverse(x-1, y)+traverse(x, y-1);
    return memo[key];
  }

  let result = traverse(m,n);
  return result;
}
