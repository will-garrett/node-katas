// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    for(let char of str){
        chars[char] = chars[char] + 1 || 1; 
        /*
        if(!chars[char]){
            char[char]=1;
        } 
        else{
            chars[char]++;
        }
        */
    }
    let max_int = 0;
    let max_char = '';
    for(let char in chars){
        if(chars[char] > max_int){
            max_int = chars[char];
            max_char = char;
        }
    }
    return max_char;
    
}

module.exports = maxChar;
