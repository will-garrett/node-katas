/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let skyline_v = new Array(grid[0].length).fill(0);
    let skyline_h = new Array(grid.length).fill(0);
    let count = 0;
    for(let v = 0; v < grid.length; v++){
        for(let h = 0; h<grid[0].length; h++){
            if(grid[v][h] > skyline_v[v]){
                skyline_v[v] = grid[v][h]
            }
            if(grid[v][h] > skyline_h[h]){
                skyline_h[h] = grid[v][h]
            }
        }
    }

    for(let v = 0; v < grid.length; v++){
      for(let h = 0; h<grid[0].length; h++){
          let max_height = Math.min(skyline_v[v], skyline_h[h]);
          count+=max_height-grid[v][h];
      }
    }
    return count;
};

module.exports = maxIncreaseKeepingSkyline;