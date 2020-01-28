const semantic = (a, b)=>{
  let a_vals = a.split('.').map(val=>parseInt(val));
  let b_vals = b.split('.').map(val=>parseInt(val));
  let i = 0;
  while(i < Math.max(a_vals.length, b_vals.length)){
    if(!a_vals[i] || !b_vals[i]){
      return a_vals.length < b_vals.length ? b : a;
    }
    if(a_vals[i] < b_vals[i]){
      return b;
    }
    i++;
  }
  
  return a;
}
module.exports = semantic;