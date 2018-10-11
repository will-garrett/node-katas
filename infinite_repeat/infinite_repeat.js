// http://hr.gs/11o9
function repeatedString(s, n) {
    var string_size = s.length;
    var tail_size = n % string_size;
    var multiple = Math.floor(n / (string_size));
    //console.log("STRING SIZE",string_size);
    //console.log("TAILSIZE", tail_size);
    //console.log("MULTIPLE",multiple);
    //console.log("TAIL", tail);
    let tail = s.slice(0,tail_size);
    let num_a = 0;
    for(let char of s){
        if(char == "a"){
            num_a++;
        }
    }
    num_a *= multiple;
    if(tail_size > 0){
        for(let char_tail of tail){
            if(char_tail == "a"){
                num_a++;
            }
        }
        
    }
    return num_a;
    
}
module.exports=repeatedString;