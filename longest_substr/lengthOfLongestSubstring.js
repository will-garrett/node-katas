var lengthOfLongestSubstring = function(s) {
    let l=0;
    let r = 1;
    let hash = {};
    if(s.length == 0){
      return 0;
    }
    let temp = s[0];
    let longest = s[0];
    for(l = 0; l < s.length; l++){
      r = l+1;
      hash[s[l]]=1;
      while(r < s.length){
        if(!hash.hasOwnProperty(s[r])){
          hash[s[r]] = 1;
          temp = s.slice(l, r+1);
        }
        else{
          if(temp.length > longest.length){
            longest = temp;
          
          }
          hash = {};
          temp = '';
          break;
        }
        if(r == s.length - 1){
          if(temp.length > longest.length){
            longest = temp;
          }
          hash = {};
          temp = '';
        }
        r++;
      }
    }
    return longest.length;
};
module.exports = lengthOfLongestSubstring;