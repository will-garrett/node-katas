// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = []
    for(let i=0; i<n; i++){
        results.push([]);
    }
    let counter = 1;
    let start_row = 0;
    let start_col = 0;
    let end_col = n-1;
    let end_row = n-1;

    while(start_col <= end_col && start_row <= end_row){
        // top
        for(let i = start_col; i<=end_col; i++){
            results[start_row][i] = counter;
            counter++;
        }

        start_row++;
        // right
        for(let j = start_row; j <= end_row; j++){
            results[j][end_col] = counter;
            counter++;
        }
        end_col--;

        // bottom
        for(let k = end_col; k >= start_col; k--){
            results[end_row][k] = counter;
            counter++;
        }
        end_row--;

        // left
        for(let l = end_row; l>= start_row; l--){
            results[l][start_col] = counter;
            counter++;
        }
        start_col++;
    }
    return results;
}

module.exports = matrix;
