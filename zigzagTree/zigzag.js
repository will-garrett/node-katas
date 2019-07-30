/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its zigzag level order traversal as:

[
  [3],
  [20,9],
  [15,7]
]
*/

/* Solutions */
module.exports.iterative = function(root){
  let results = [];
  let currentLvl = [];
  let nextLvl = [];
  let lvl = 0;
  let ltr = true;
  currentLvl.push(root);
  while(currentLvl.length > 0){
    let temp = currentLvl.pop();
    if(temp){
        if(results[lvl]){
            results[lvl].push(temp.val);
        }
        else{
            results[lvl] = [temp.val];
        }
        if(ltr){
            if(temp.left){
                nextLvl.push(temp.left);
            }
            if(temp.right){
                nextLvl.push(temp.right);
            }
        }
        else{
            if(temp.right){
                nextLvl.push(temp.right);
            }
            if(temp.left){
                nextLvl.push(temp.left);
            }
        }
    }
    if(currentLvl.length === 0){
        ltr = !ltr;
        [currentLvl, nextLvl] = [nextLvl, currentLvl];
        lvl++;
    }
  }
  return results;
}

module.exports.recursive = function(root) {
  var helper = function(result, level, curr) {
      if (curr === null) {
          return;
      }
      
      if (!result[level]) result[level] = [];
      
      let leftToRight = level % 2 === 0;
      if (leftToRight) {
          result[level].push(curr.val);
      } else {
          result[level].unshift(curr.val);
      }
      
      helper(result, level+1, curr.left);
      helper(result, level+1, curr.right);
  }
  
  let result = [];
  helper(result, 0, root);
  return result;
};