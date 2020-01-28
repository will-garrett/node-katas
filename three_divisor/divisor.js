const divisor = (number) => {
  let num_string = ensureString(number);
  let num_removed = 0;
  let len = num_string.length;
  let sum;
  
  return num_removed;
}
const ensureString = (shouldBeStr) => {
  switch(typeof shouldBeStr){
    case 'string':
//      console.log("detected string");
      return shouldBeStr;
      break;
    default:
//      console.log("detected ", typeof shouldBeStr);
      return shouldBeStr.toString();
      break;
  }
}
module.exports = divisor;