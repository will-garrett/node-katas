// https://leetcode.com/problems/delete-columns-to-make-sorted-iii/

module.exports = (str) => {
  const b = str;
  let len = str.length
  let len2 = b[0].length
  let n = 0
  for (var i=0;i<len2;i++){
      for (var j=0; j < len-1; j++){
          if( b[j][i] > b[j+1][i]){
              n++
              break
          }
      }
  }
  return n
};