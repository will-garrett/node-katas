//http://hr.gs/ceffdc
function plusMinus(arr) {
    let len = arr.length;
    let hash_table = {
        "neg":0,
        "nil":0,
        "pos":0
    };
    for(let num of arr){
        if(num < 0){
            hash_table.neg++;
        }
        else if(num > 0){
            hash_table.pos++;
        }
        else if(num == 0){
            hash_table.nil++;
        }
    }
    return [hash_table.pos/len, hash_table.neg/len, hash_table.nil/len];
}
module.exports=plusMinus;