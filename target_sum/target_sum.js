/**
 * find values which equal a target in an array of unique values
 */
module.exports.first = (arr, target, nums = false) => {
  return target_sum(arr, target, nums, true);
}

const target_sum = module.exports.all = (arr, target, values = false, first = false) => {
  let map = {};
  let results = [];
  for(let i = 0; i < arr.length; i++){
    let diff = target - arr[i];
    if(map.hasOwnProperty(diff)){
      if(first){
        return values ? [arr[map[diff]], arr[i]] : [map[diff], i];
      }
      results.push(values ? [arr[map[diff]], arr[i]]: [map[diff], i]);
    }
    map[arr[i]] = i;
  }
  return results.length == 0 ? false : results;
}