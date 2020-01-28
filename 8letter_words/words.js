const dict = Object.keys(require("./dict.json")).filter((str, idx)=>{
  if(str.length == 1){
    if(str == "a" || str == "i"){
      return true;
    }
    else{
      return false;
    }
  }
  if(str.length <= 8){
    return true;
  }
  return false;
});
const removeAtIndex = (index, str) => {
  return str.substr(0, index)+str.substr(index+1);
}
const isAWord = (str) => {
  return dict.includes(str);
}
const eightLetterMagic = () => {
  let eightletter = dict.filter((str)=>{
    return str.length === 8;
  });
  let results = {};
  for(let i of eightletter){
    let resultOf = traverse(i, []);
    if(resultOf){
      results[i] = resultOf;
    }
  }
}
const traverse = (str, arr = []) => {
  if(str.length == 1){
    if(isAWord(str)){
      arr.push(str);
      console.log(arr);
      return arr;
    }
    else{
      return false;
    }
  }
  else if(isAWord(str)){
    arr.push(str);
    for (let i = 0; i < str.length; i++) {
      let new_word = removeAtIndex(i, str);
      traverse(new_word, arr);
    }
  }
  else{
    return false;
  }
}
module.exports.removeAtIndex = removeAtIndex;
module.exports.isAWord = isAWord;
module.exports.eightLetterMagic = eightLetterMagic;

// chatters
// hatters
// haters
// hates
// hate
// ate
// at
// a