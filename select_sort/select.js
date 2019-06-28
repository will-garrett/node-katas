function selectionSort(input){
  let hunter = 0;
  let current_min = 0;
  let placard = 0;
  let min_index = 0;
  for(placard = 0; placard < input.length; placard++){
    min_index = placard;
    for(hunter = placard+1; hunter < input.length; hunter++){
      if(input[hunter] < input[min_index]){
        min_index = hunter;
      }
    }
    input = swap(input, min_index, placard);
  }
  return input;
}

function swap(ray, a, b){
  let temp = ray[a];
  ray[a] = ray[b];
  ray[b] = temp;
  return ray;
}

module.exports = selectionSort;