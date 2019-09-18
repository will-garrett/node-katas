const fun = (arr, lvl = 1) => {
  let sum = 0;
  for (const i of arr) {
    if(i instanceof Array){
      sum+=fun(i, lvl+1);
    }
    else{
      sum+=i*lvl;
    }
  }
  return sum;
}
module.exports = fun;