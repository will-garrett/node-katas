function read_time(the_string, precision = false, avg = 200){
    let words = the_string.split(" ");
    let calculation = {};

    // Precision calculation
    if(!precision){
        let wpm = (words.length < avg) ? 1 : Math.round(words.length / avg);
        calculation.minutes = wpm;
    }
    else{
        let seconds = Math.round(words.length / (avg/60));
        calculation.minutes = Math.floor(seconds/60);
        calculation.seconds = Math.floor(seconds%60);
    }
    
    return calculation;
}
module.exports = read_time;