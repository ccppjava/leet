/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length;
    if (len === 1) {
        return matrix;
    }
    
    var half = Math.ceil(len / 2);

    for (var i = 0, j = 0; i < half; i++, j++) {
        for (var n = 0; n< len - 1 - i -j; n++) {
            console.log(matrix[i][j+n], matrix[len-1-i-n][j], matrix[len-1-i][len-1-j-n], matrix[i+n][len-1-j]);
            var tmp = matrix[i][j+n];
            matrix[i][j+n] = matrix[len-1-i-n][j];
            matrix[len-1-i-n][j] = matrix[len-1-i][len-1-j-n];
            matrix[len-1-i][len-1-j-n] = matrix[i+n][len-1-j];
            matrix[i+n][len-1-j] = tmp;
            console.log(i,j,n,tmp);
            console.log(matrix);
        }
    }

    // console.log(matrix);
};

// rotate([[1,2,3],[4,5,6],[7,8,9]]);

rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])

// var rotate = function(matrix) {
//     var n = matrix.length;
//     if (n === 1) {
//         return matrix;
//     }
    
//     var half = Math.ceil(n / 2);
//     for (var i = 0; i < half; i++) {
//         for (var j = 0; j < half; j++) {
//             console.log(i, j);
//             var tmp = matrix[i][j];
//             matrix[i][j] = matrix[i][n - j - 1];
//             matrix[i][n - j - 1] = matrix[n - i - 1][n - j - 1];
//             matrix[n - i - 1][n - j - 1] = matrix[n - i - 1][j];
//             matrix[n - i - 1][j] = tmp;
//         }
//     }

//     console.log(matrix);
// };