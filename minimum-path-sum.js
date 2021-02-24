/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    if (rowCount === 1 && colCount === 1) {
        return grid[0][0];
    }
    
    const dp = new Array(rowCount);
    for (let i = 0; i < rowCount; i++) {
        dp[i] = new Array(colCount);
    }
    
    function search(row, col) {
        // console.log(row, col);
        if (dp[row][col]) {
            return dp[row][col];
        }
        
        if (row === rowCount - 1 && col === colCount - 1) {
            return grid[row][col];
        }
        
        let r1 = Infinity, r2 = Infinity;
        if (row < rowCount - 1) {
            r1 = grid[row][col] + search(row + 1, col);
        }
        
        if (col < colCount - 1) {
            r2 = grid[row][col] + search(row, col + 1);
        }
        
        // console.log(r1, r2);
        
        r1 = r1 <= r2 ? r1 : r2;
        dp[row][col] = r1;
        return r1;
    }
    
    search(0, 0);
    // console.log(dp);
    return dp[0][0];
};



//
// Timeout version
//
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    
    const dp = new Array(rowCount);
    for (let i = 0; i < rowCount; i++) {
        dp[i] = new Array(colCount);
    }
    
    let result = Infinity;
    function search(row, col, total) {
        // console.log(row, col, total);
        if (row === rowCount - 1 && col === colCount - 1) {
            if (total < result) {
                result = total;
            }
            return;
        }
        
        if (row < rowCount - 1) {
            search(row + 1, col, total + grid[row + 1][col]);
        }
        
        if (col < colCount - 1) {
            search(row, col + 1, total + grid[row][col + 1]);
        }
    }
    
    search(0, 0, grid[0][0]);
    
    return result;
};