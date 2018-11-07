function textSummary(the_string){
    // Takes the first 100 characters as words from the_string
    // also
    let the_strings = the_string.split(" ");
    let string_size = 0;
    let index = 0;
    let the_summary = '';
    while(string_size <= 100){
        string_size+=the_strings[index].length+1;
        index++;
    }
    if(the_strings[index-2].length < 2){
        index--;
    }
    
    let new_strings = the_strings.splice(0, index-1);

    // Remove punctuation from last word
    new_strings[new_strings.length-1]=new_strings[new_strings.length-1].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    
    return new_strings.join(" ");
    
}
module.exports = textSummary;