module.exports = (str) => {
  const INT_MIN=-2147483648;
  const INT_MAX=2147483648;
  let num = parseInt(str);
  if(!num){
    return 0;
  }
  else if(num < INT_MIN){
    return INT_MIN;
  }
  else if(num > INT_MAX){
    return INT_MAX;
  }
  return parseInt(str) ;
}