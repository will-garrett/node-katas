var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let l = 0;
    let r = 0;
    let hash = {};
    for(r = 0; r < s.length; r++){
      if(hash.hasOwnProperty(s[r])) {
        l = Math.max(hash[s[r]], l);
      }
      longest = Math.max(longest, r - l + 1);
      hash[s[r]] = r + 1;
    }
    return longest;
};
module.exports = lengthOfLongestSubstring;