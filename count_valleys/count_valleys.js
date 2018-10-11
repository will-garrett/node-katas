// http://hr.gs/3rtx
function countingValleys(n, s) {
    let altitude = 0;
    let valley_count = 0;
    let valley_flag = false;
    for(let direction of s){
        if(direction == "D"){
            altitude--;
        }
        else{
            altitude++;
        }
        if(valley_flag == false && altitude < 0){
            valley_flag = true;
        }
        if(altitude == 0 && valley_flag == true){
            valley_count++;
            valley_flag = false;
        }
    }
    return valley_count;
}
module.exports = countingValleys;