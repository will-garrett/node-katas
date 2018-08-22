// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){
    clean_A=stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    clean_B=stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    return clean_A === clean_B;
}


function anagrams_3pass(stringA, stringB) {
    str_a = stringA.replace(/[^\w]/g, "").toLowerCase();
    str_b = stringB.replace(/[^\w]/g, "").toLowerCase();
  
    remap = function(my_string){
        let chars = {};
        for(let char of my_string){
            chars[char] = chars[char] + 1 || 1;
        }

        return chars;
    }

    const chars_a = remap(str_a);
    const chars_b = remap(str_b);

    if(Object.keys(chars_a).length != Object.keys(chars_b).length){
        return false;
    }
    
    else{
        for(let char in chars_a){
            if(chars_a[char] != chars_b[char]){
                return false;
            }
        }
        return true;
    }
    
}

module.exports = anagrams;
