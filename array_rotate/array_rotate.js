//http://hr.gs/16xx
function rotLeft(a, d) {
    let temp = a.splice(0);
    for (let i=0; i<=d-1; i++) {
      let first = temp.shift();
      temp.push(first);
    }
    return temp;
}
module.exports=rotLeft;