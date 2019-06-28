function bubbleSort(input){
  let has_swapped = false;
  function swap(ray, a, b){
    console.log(ray, a, b);
    let temp = ray[a];
    ray[a] = ray[b];
    ray[b] = temp;
    console.log(ray, a, b);
    return ray;
  }
  console.log("Enter");
  for(let i = 0; i < input.length; i++){
      for(let j = 1; j < input.length; j++){
        if(input[j - 1] > input[j]) {
          input = swap(input, j - 1, j);
        }
      }
    
  }
  return input;
}
module.exports = bubbleSort;