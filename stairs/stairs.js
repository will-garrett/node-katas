// http://hr.gs/adfdcb
function stairs(n){
    for(let row = 0; row<n; row++){
        let stair = '';
        for(let col = 0; col<n; col++){
            if(col <= row){
                stair='#'+stair;
            }
            else{
                stair=' '+stair;
            }
        }
        console.log(stair);
    }
    //return stairs_recursive(n);
}
// THE BELOW FUNCTION WORKS PERFECTLY HACKERRANK ERRORS BECAUSE OF MAXIMUM CALLBACK

function stairs_recursive(n, row = 0, stair = ''){
    if(n === row){
        return;
    }
    
    if(n === stair.length){
        console.log(stair);
        return stairs_recursive(n, row +1);
    }

    const add = stair.length <= row ? '#' : ' ';
    
    stairs_recursive(n, row, add+stair);
}
module.exports=stairs;