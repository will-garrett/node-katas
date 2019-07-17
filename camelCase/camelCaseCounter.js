function camelCaseCount(str){
  let count;
  if(str.length > 0){
    count = 1;
    for(let i = 0; i < str.length; i++){
      let char_code = str.charCodeAt(i);
      if(char_code >= 65 && char_code <= 90){
        count++;
      }
    }
  }
  else{
    count = 0;
  }
  return count;
}
/*
let lowers = 'abcdefghijklmnopqrstuvwxyz';
let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


for(let i = 0; i<lowers.length; i++){
  console.log(lowers[i]+": ", lowers.charCodeAt(i));
  console.log(uppers[i]+": ", uppers.charCodeAt(i));
}
*/

module.exports = camelCaseCount;