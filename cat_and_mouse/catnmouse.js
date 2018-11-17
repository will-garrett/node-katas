// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(cat_a, cat_b, mouse) {
    let a_distance = Math.abs(mouse - cat_a);
    let b_distance = Math.abs(mouse - cat_b);
    return (a_distance == b_distance) ? "Mouse C" : a_distance < b_distance ? "Cat A" : "Cat B";
}
module.exports=catAndMouse