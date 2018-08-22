// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str){ // DISCUSSABLE SOLUTION, NOT MOST EFFICIENT
    return str.split.every((val, i)=>{
        return val === str[str.length - i - 1];
    });
}

/*
function palindrome(str) {
    return (str === reverse(str));
};

function reverse(str){
    return ((str.length < 2) ? str : str.substr(-1, 1) + reverse(str.substr(0, str.length-1)));
}
*/
module.exports = palindrome;
