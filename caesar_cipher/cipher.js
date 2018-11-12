function cipher(message, shift_amt){
    const alphabet = ("abcdefghijklmnopqrstuvwxyz").split('');

    var cipher_alphabet = shiftArrayToLeft(alphabet, shift_amt);
    
    let new_message = '';
    for (const letter of message) {
        let make_uppercase = (letter.toLowerCase() != letter) ? true : false;
        let find_me = letter.toLowerCase();
        const index = alphabet.indexOf(find_me);
        if(index >= 0){
            new_message+=make_uppercase ? cipher_alphabet[index].toUpperCase():cipher_alphabet[index];
        }
        else{
            new_message+=letter;
        }
    }
    return new_message;
}
function shiftArrayToRight(arr, places) {
    let new_arr = Array.from(arr);
    for (var i = 0; i < places; i++) {
        new_arr.unshift(new_arr.pop());
    }
    return new_arr;
}
function shiftArrayToLeft(arr, places){
    let new_arr = Array.from(arr);
    for(var i = 0; i<places; i++){
        new_arr.push(new_arr.shift());
    }
    return new_arr;
}
module.exports = cipher;