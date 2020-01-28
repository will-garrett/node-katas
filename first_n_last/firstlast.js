/**
 * Given an array of integers nums sorted in ascending order, 
 * find the starting and ending position of a given target value.
 *  Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let start = null;
  let finish = null;
  if(nums.length == 1){
    if(nums[0]==target){
      return [0,0];
    }
    return [-1,-1];
  }
  else if(nums.length == 2){
    if(nums[left] == target && nums[right] == target){
      return [0,1];
    }
    else if(nums[left] == target){
      return [0,0];
    }
    else if(nums[right] == target){
      return [1,1]
    }
  }
  
  while(left < right){
    let mid = Math.trunc(left + (right - left) / 2);
    if(nums[mid] == target){
      let i = mid;
      while(i >= 0 && nums[i] == target){
        i--;
      }
      start = i + 1;
      let j = mid;
      while(j < nums.length && nums[j] == target){
        j++;
      }
      finish = j - 1;
      return [start, finish];
    }
    if(nums[mid] < target){
      left = mid+1;
    }
    if(nums[mid] > target){
      right = mid;
    }
  }
  return [-1, -1]
}

