// https://www.hackerrank.com/challenges/cavity-map/problem

// SOLUTION REQUIRES MODIFYING main() - https://www.hackerrank.com/challenges/cavity-map/submissions/code/91190783

function cavityMap(grid){
    for(let i=1; i<grid.length-1; i++){
        for(let j=1; j<grid.length-1; j++){
            if(grid[i][j-1]<grid[i][j] && grid[i][j+1]<grid[i][j] && grid[i-1][j]<grid[i][j] && grid[i+1][j]<grid[i][j]){
                  grid[i][j]='X';
            }
        }
    }
    return grid;
}
module.exports = cavityMap;