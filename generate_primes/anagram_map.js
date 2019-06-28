var generator = require("./generate_primes");

function getWordVal(word_str, alphamap = null){
  if(!alphamap){
    alphamap = generate_alphaMap();
  }
  var value = 1;
  for(letter of word_str){
    //console.log(letter, alphamap[letter]);
    value*=alphamap[letter];
  }
  return value;
}

function generate_alphaMap(alphabet = 'abcdefghijklmnopqrstuvwxyz'){
  let primes = generator(alphabet.length);
  var map = {};
  for (const letter in alphabet) {
    map[alphabet[letter]] = primes[letter];
  }
  return map;
}
function groupAnagrams(arr){
  var groups = {};
  const alphamap = generate_alphaMap();
  for (const word of arr) {
    let group_key = getWordVal(word.toLowerCase(), alphamap);
    if(!groups[group_key]){
      groups[group_key] = [word];
    }
    else{
      groups[group_key].push(word);
    }
  }
  return groups;
}
module.exports.getWordVal = getWordVal;
module.exports.groupAnagrams = groupAnagrams;