const fs = require('fs');

try {  
    var war_n_peace = fs.readFileSync("./text_read_time/wrnpc.txt", 'utf8');
} catch(e) {
    console.log('Error:', e.stack);
}

let war_and_peace = war_n_peace.replace(/(\r\n|\r)/gm," ").split(" ");
let i = 0;
for(let word of war_and_peace){
    console.log(i, word);
    i++;
}
