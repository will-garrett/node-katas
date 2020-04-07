module.exports = (arr) => {
  let water = 0;
  let left = [arr[0]];
  
  for(let i = 1; i < arr.length; i++) {
    left[i] = Math.max(left[i-1], arr[i]);
  }
  let right = [];
  right[arr.length-1] = arr[arr.length-1];

  for(let i = arr.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i+1], arr[i]);
  }
  for (let i = 0; i < arr.length; i++){
    water+=Math.min(left[i], right[i]) - arr[i];
  }
  return water;
}