// http://hr.gs/efaabf
function jumpingOnClouds(c) {
    let jumps = 0;
    let size = c.length;
    let cursor = 0;
    while(cursor < size-1){
        if(c[cursor+2] == 0){
            jumps++;
            cursor = cursor+2
        }
        else if(c[cursor+1] == 0){
            jumps++;
            cursor = cursor+1;
        }
        else{
            return null;
        }
    }
    return jumps;
}
module.exports = jumpingOnClouds;