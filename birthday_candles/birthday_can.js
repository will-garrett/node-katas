// http://hr.gs/febc
function birthdayCakeCandles(ar) {
    let tallest_candle = 0;
    let candle_count = 0;
    for(let candle of ar){
        if(candle > tallest_candle){
            tallest_candle = candle;
            candle_count = 1;
        }
        else if(candle == tallest_candle) candle_count++;
    }
    return candle_count;
}
module.exports = birthdayCakeCandles;