// http://hr.gs/eabbdd
function sock_merchant(n, ar){
    let sock_table = {};
    let pair_count = 0;
    for(let key of ar){
        if(!sock_table.hasOwnProperty(key)){
            sock_table[key] = 1;
        }
        else{
            delete sock_table[key];
            pair_count++;
        }
    }
    return pair_count;
}

module.exports=sock_merchant;