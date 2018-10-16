// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple_count = 0;
    let orange_count = 0;
    for(let apple of apples){
        if(house_hit_check(a, apple, s, t)){
            apple_count++;
        }
    }
    for(let orange of oranges){
        if(house_hit_check(b, orange, s, t)){
            orange_count++;
        }
    }
    return [apple_count, orange_count];
}
function house_hit_check(origin, deviation, house_x1, house_x2){
    return origin+deviation >= house_x1 && origin+deviation <= house_x2;
}
module.exports = countApplesAndOranges;