/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let low = 0; 
    let high = matrix.length - 1;
    while (low <= high) {
        let mid = Math.ceil((low + high) / 2);
        if (matrix[mid][0] < target) {
            low = mid + 1;
        } else if (matrix[mid][0] === target) {
            return true;
        } else {
            high = mid - 1;
        }
    }
    
    // after search low is the next row
    let row = low > 0 ? low - 1 : low;

    low = 0;
    high = matrix[0].length - 1;
    while (low <= high) {
        let mid = Math.ceil((low + high) / 2);
        if (matrix[row][mid] < target) {
            low = mid + 1;
        } else if (matrix[row][mid] === target) {
            return true;
        } else {
            high = mid - 1;
        }
    }
    
    return false;
};

searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3);
searchMatrix([[1]], 0);