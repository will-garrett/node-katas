// https://www.hackerrank.com/challenges/queens-attack-2/problem
// Complete the queensAttack function below.
function tracePath(r, c, n, obstacles, movementFunc){
    var isBlocked = function(r, c, obstacles){
        if(obstacles.length > 0){
            for(let o in obstacles){
                if(obstacles[o][0] == r && obstacles[o][1] == c){
                    obstacles.splice(o, 1);
                    return true;
                }
            }
        }
        return false;
    }
    let pathSum = 0;
    current = [r, c];
    current = movementFunc(current[0], current[1]);
    while(current[0] > 0 && current[0] <= n && current[1] > 0 && current[1] <= n){
        if(isBlocked(current[0], current[1], obstacles)){
            break;
        }
        else{
            pathSum++;
        }
        current = movementFunc(current[0], current[1]);
    }
    return pathSum;
}

function queensAttack(n, k, r_q, c_q, obstacles) {
    let attackSum = 0;

    var moveUp = function (r, c){ return [r,c+1]; }
    var moveDown = function(r, c){ return [r, c-1]; }
    var moveLeft = function(r, c){ return [r-1, c]; }
    var moveRight = function(r, c){ return [r+1, c]; }
    var moveUpLeft = function(r, c){ return [r-1, c+1]; }
    var moveUpRight = function(r,c){ return [r+1, c+1]; }
    var moveDownLeft = function(r, c){return [r-1, c-1];}
    var moveDownRight = function(r, c){ return [r+1, c-1]; }
    
    
    // TRACE UP
    attackSum += tracePath(r_q, c_q, n, obstacles, moveUp);
    // TRACE DOWN
    attackSum += tracePath(r_q, c_q, n, obstacles, moveDown);
    // TRACE LEFT
    attackSum += tracePath(r_q, c_q, n, obstacles, moveLeft);
    // TRACE RIGHT
    attackSum += tracePath(r_q, c_q, n, obstacles, moveRight);
    // TRACE UP LEFT
    attackSum += tracePath(r_q, c_q, n, obstacles, moveUpLeft);
    // TRACE UP RIGHT
    attackSum += tracePath(r_q, c_q, n, obstacles, moveUpRight);
    // TRACE DOWN LEFT
    attackSum += tracePath(r_q, c_q, n, obstacles, moveDownLeft);
    // TRACE DOWN RIGHT
    attackSum += tracePath(r_q, c_q, n, obstacles, moveDownRight);

    return attackSum;
}
module.exports = queensAttack;