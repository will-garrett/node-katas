// https://www.hackerrank.com/challenges/queens-attack-2/problem
function slope(x1, y1, x2, y2){
    return ((y2-y1) / (x2-x1));
}
function queensAttack(n, k, r_q, c_q, obstacles) {

    let l_sum = r_q-1;
    let r_sum = n-r_q;
    let u_sum = n-c_q;
    let d_sum = c_q-1;

    let dl_sum = Math.min((r_q-1), (c_q-1))
    let ul_sum = Math.min((r_q-1), (n-c_q));
    let dr_sum = Math.min(n-r_q, c_q-1);
    let ur_sum = Math.min(n-c_q, n-r_q);

    let temp_sum = 0;

    for(let o of obstacles){
        let the_slope = slope(r_q, c_q, o[0], o[1]);
        switch(the_slope){
            case Infinity:
                    // UP
                    temp_sum = o[1]-c_q-1;
                    u_sum = (u_sum > temp_sum) ? temp_sum : u_sum;
                break;
            case -Infinity:
                    // DOWN
                    temp_sum = c_q-o[1]-1
                    d_sum = (d_sum > temp_sum) ? temp_sum : d_sum;
                break;
            case 0:
                if(o[0]<r_q){
                    // LEFT
                    temp_sum = r_q - o[0] - 1;
                    l_sum = (l_sum > temp_sum) ? temp_sum : l_sum;
                }
                else{
                    // RIGHT
                    temp_sum = o[0]- r_q - 1;
                    r_sum = (r_sum > temp_sum) ? temp_sum : r_sum;
                }
                break;
            case 1:
                if(o[1]<c_q){
                    // DOWN LEFT
                    temp_sum = r_q-o[0]-1;
                    dl_sum = (dl_sum > temp_sum) ? temp_sum : dl_sum;
                }
                else{
                    // UP RIGHT
                    temp_sum = o[0]-r_q-1;
                    ur_sum = (ur_sum > temp_sum) ? temp_sum : ur_sum;
                }
                break;
            case -1:
                if(o[1] < c_q){
                    // DOWN RIGHT
                    temp_sum = o[0]-r_q-1;
                    dr_sum = (dr_sum > temp_sum) ? temp_sum : dr_sum;
                }
                else{
                    // UP LEFT
                    temp_sum = r_q-o[0]-1;
                    ul_sum = (ul_sum > temp_sum) ? temp_sum : ul_sum;
                }
                break;
            default:
                //obstacles.splice(o, 1);
        }
    }
    return l_sum + r_sum + u_sum + d_sum + dr_sum + dl_sum + ur_sum + ul_sum;
    
}

function tracePath(r, c, n, movementFunc){ 
    let pathSum = 0;
    current = [r, c];
    current = movementFunc(current[0], current[1]);
    while(current[0] > 0 && current[0] <= n && current[1] > 0 && current[1] <= n){
        pathSum++;
        current = movementFunc(current[0], current[1]);
    }
    return pathSum;
}
function traceDistance(x1, y1, x2, y2, movementFunc){
    let pathSum = 0;
    current = movementFunc(x1, y1);
    while(current[0] > 0 && current[0] < x2 && current[1] > 0 && current[1] < y2){
        pathSum++;
        current = movementFunc(current[0], current[1]);
    }
    return pathSum;
}
module.exports = queensAttack;