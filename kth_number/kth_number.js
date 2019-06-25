function kthNum(a, k){
  let depth = 0;
  function search_Sort(left, right){
    depth++;
    if(left == right){
      return a[left];
    }
    if(left > right){ return; }
    let wall = left;
    let pivot = right;
    for(let i = left; i < right; i++){
      if(a[i] < a[pivot]){
        [a[i], a[wall]] = [a[wall], a[i]];
        wall++;
      }
    }
    [a[wall], a[pivot]] = [a[pivot], a[wall]];
    if(wall == a.length - k){
      return a[wall]
    }
    else if(wall > a.length - k){
      return search_Sort(left, wall-1);
    }
    else{
      return search_Sort(wall+1, right);
    }
  }
  return search_Sort(0, a.length-1);
}
module.exports = kthNum;