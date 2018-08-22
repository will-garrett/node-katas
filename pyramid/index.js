// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid_iterative(n) {
    let middle = Math.floor((n*2-1) / 2);
    for(let row = 0; row<n; row++){
        let level = '';
        for(col = 0; col < n*2-1; col++){
            if(middle - row <= col && middle + row >= col){
                level+='#';
            }
            else{
                level+=' ';
            }
        }
        console.log(level);
    }
}
function pyramid_recursive(n, row = 0, level = ''){
    if(n === row){
        return;
    }

    if(level.length === 2 * n - 1){
        console.log(level);
        return pyramid_recursive(n, row + 1);
    }
    const middle = Math.floor((2*n-1)/2);
    let add;
    if(middle - row <= level.length && middle + row >= level.length){
        add = '#';
    }
    else{
        add = ' ';
    }
    pyramid_recursive(n, row, level+add);
}
function pyramid(n){
    //return pyramid_iterative(n);
    return pyramid_recursive(n);
}

module.exports = pyramid;
