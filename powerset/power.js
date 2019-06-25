function powerSet(inputStr) {

  var result = [[]];

  for(var i=0; i<inputStr.length ;i++){
     var len = result.length; 
     for(var x=0; x<len ;x++){
       result.push(result[x].concat(inputStr[i]));
     }
  }
  let result_list = [];
  for(results of result){
      result_list.push(results.join(''));
  }
  return result_list.sort();
}
module.exports = powerSet;