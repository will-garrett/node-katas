function quickSort_outco(input){
  let depth = 0;
  function divide(start, end){
    depth++;
    if(start >= end){ return; }
    let w = start;
    for(let i = start; i < end; i++){
      if(input[i] < input[end]){
        [input[i], input[w]] = [input[w], input[i]];
        w++;
      }
    }
    [input[w], input[end]] = [input[end], input[w]];
    divide(start, w-1);
    divide(w+1, end);
  }
  divide(0, input.length-1)
  console.log("Depth:", depth);
  return input;
}
function quicksort_will(a){
  let depth = 0;
  function partition(left, right){
    depth++;

    if(left >= right){ return; }
    let wall = left;
    let pivot = right;
    for(let i = left; i < right; i++){
      if(a[i] < a[pivot]){
        [a[i], a[wall]] = [a[wall], a[i]];
        wall++;
      }
    }
    [a[wall], a[pivot]] = [a[pivot], a[wall]];
    partition(left, wall-1);
    partition(wall+1, right);
  }
  partition(0, a.length-1);

  console.log("Depth: ", depth);
  return a;
}





module.exports.will = quicksort_will;
module.exports.outco = quickSort_outco;