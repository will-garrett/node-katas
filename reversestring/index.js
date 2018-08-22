// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // THE DUMB TRICKY WAY
    //const arr = str.split('');
    //arr.reverse();
    //arr.join('');
    //return arr;
/*
    // REVERSED STR FORLOOP
    let reversed = '';
    for ( let character of str){
        reversed =  character + reversed;
    }
    return reversed;
*/


    // SUBSTR METHOD w0g
    //return (str.length < 2) ? str : reverse(str.substr(0, str.length-1));
    
    return ((str.length == 1) ? str : str.substr(-1, 1) + reverse(str.substr(0, str.length-1)));
    /*
        NON-TERNARY IF STATEMENT
        if(str.length < 2){
            return str;
        }
        return str.substr(-1, 1) + reverse(str.substr(0, str.length-1));
    */
//    return str.split('').reduce((reversed, character)=>{
//        return character + reversed;
//    },'');
}

module.exports = reverse;
