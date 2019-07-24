module.exports.stringPermute = function(str){
  let result = [];
  const permute = (ray, l, r)=>{
    if(l == r){
      result.push(ray.join(''));   
    }
    else{
      for(let i = l; i <= r; i++){
        [ray[l], ray[i]] = [ray[i], ray[l]];
        permute(ray, l+1, r);
        [ray[l], ray[i]] = [ray[i], ray[l]];
      }
    }
  }
  // because strings are immutable
  permute(str.split(''), 0, str.length-1);
  return result;
}

// https://leetcode.com/problems/permutations/submissions/
module.exports.arrayPermute = function(ray_ray){
  const result = [];
  function permute(ray, l, r){
    if(l == r){
      result.push([...ray]); // because js...
    }
    else{
      for(let i = l; i <= r; i++){
        [ray[l], ray[i]] = [ray[i], ray[l]];
        permute(ray, l+1, r);
        [ray[l], ray[i]] = [ray[i], ray[l]];
      }
    }
  }
  // because strings are immutable
  permute(ray_ray, 0, ray_ray.length-1);
  return result;
}