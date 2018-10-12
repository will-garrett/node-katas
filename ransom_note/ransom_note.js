// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function checkMagazine(magazine, note){
    let magazine_table = {};
    let magazine_words = magazine.split(" ");
    let note_words = note.split(" ");
    // Populate hash table
    for(available_word of magazine_words){
        magazine_table[available_word] = magazine_table[available_word] + 1 || 1;
    }
    // Check if note words are full available
    for(needed_word of note_words){
        if(magazine_table[needed_word] > 0){
            magazine_table[needed_word]--;
        }
        else{
            return "No";
        }
    }
    return "Yes";
}
module.exports=checkMagazine;