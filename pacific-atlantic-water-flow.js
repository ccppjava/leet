/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    const rows = matrix.length;
    if (rows <= 0) {
        return [];
    }
    const cols = matrix[0].length;
    if (cols <= 0) {
        return [];
    }

    const pac = new Array(rows);    
    const alt = new Array(rows);
    for (let row = 0; row < rows; row++) {
        pac[row] = new Array(cols).fill(0);
        alt[row] = new Array(cols).fill(0);
    }

    function search(r, c, water) {
        let visited = new Array(rows);
        for (let row = 0; row < rows; row++) {
            visited[row] = [];
        }

        s(r, c);

        function s(r, c) {
            if (visited[r][c]) {
                return false;
            }

            visited[r][c] = 1;

            if (r - 1 >= 0 && matrix[r][c] >= matrix[r - 1][c]) {
                if (water[r - 1][c] === 1) {
                    water[r][c] = 1;
                    return true;
                } else {
                    if (s(r - 1, c)) {
                        water[r][c] = 1;
                        return true;
                    }
                }
            }
    
            if (r + 1 < rows && matrix[r][c] >= matrix[r + 1][c]) {
                if (water[r + 1][c] === 1) {
                    water[r][c] = 1;
                    return true;
                } else {
                    if (s(r + 1, c)) {
                        water[r][c] = 1;
                        return true;
                    }
                }
            }
    
            if (c - 1 >= 0 && matrix[r][c] >= matrix[r][c - 1]) {
                if (water[r][c - 1] === 1) {
                    water[r][c] = 1;
                    return true;
                } else {
                    if (s(r, c - 1)) {
                        water[r][c] = 1;
                        return true;
                    }
                }
            }
    
            if (c + 1 < cols && matrix[r][c] >= matrix[r][c + 1]) {
                if (water[r][c + 1] === 1) {
                    water[r][c] = 1;
                    return true;
                } else {
                    if (s(r, c + 1)) {
                        water[r][c] = 1;
                        return true;
                    }
                }
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (row === 0 || col === 0) {
                pac[row][col] = 1;
            } else if ((matrix[row][col] >= matrix[row - 1][col] && pac[row - 1][col] === 1)   
                    || (matrix[row][col] >= matrix[row][col - 1] && pac[row][col - 1] === 1)) {
                pac[row][col] = 1;
            }
        }
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (pac[row][col] !== 1) {
                search(row, col, pac);
            }
        }
    }
    
    for (var row = rows - 1; row >= 0; row--) {
        for (var col = cols - 1; col >= 0; col--) {
            if (row === rows - 1 || col === cols - 1) {
                alt[row][col] = 1;
            } else if ((matrix[row][col] >= matrix[row + 1][col] && alt[row + 1][col] === 1)   
                    || (matrix[row][col] >= matrix[row][col + 1] && alt[row][col + 1] === 1)) {
                alt[row][col] = 1;
            }
        }
    }

    for (var row = rows - 1; row >= 0; row--) {
        for (var col = cols - 1; col >= 0; col--) {
            if (alt[row][col] !== 1) {
                search(row, col, alt);
            }
        }
    }

    const result = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (pac[row][col] === 1 && alt[row][col] === 1) {
                result.push([row, col]);
            }
        }
    }

    // console.log(pac);
    // console.log(alt);
    console.log(result);
    return result;
};



// [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
// pacificAtlantic([[1,2,3],[8,9,4],[7,6,5]]);

// [[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],
//  [2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3]]
// pacificAtlantic([[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]);


// [[0,13],[0,14],[1,13],[11,3],[12,0],[12,2],[12,3],[13,0],[13,1],[13,2],[14,0],[15,0]]
// pacificAtlantic([
//     [8,13,11,18,14,16,16,4,4,8,10,11,1,19,7],
//     [2,9,15,16,14,5,8,15,9,5,14,6,10,15,5],
//     [15,16,17,10,3,6,3,4,2,17,0,12,4,1,3],
//     [13,6,13,15,15,16,4,10,7,4,19,19,4,9,13],
//     [7,1,9,14,9,11,5,4,15,19,6,0,0,13,5],
//     [9,9,15,12,15,5,1,1,18,1,2,16,15,18,9],
//     [13,0,4,18,12,0,11,0,1,15,1,15,4,2,0],
//     [11,13,12,16,9,18,6,8,18,1,5,12,17,13,5],
//     [7,17,2,5,0,17,9,18,4,13,6,13,7,2,1],
//     [2,3,9,0,19,6,6,15,14,4,8,1,19,5,9],
//     [3,10,5,11,7,14,1,5,3,19,12,5,2,13,16],
//     [0,8,10,18,17,5,5,8,2,11,5,16,4,9,14],
//     [15,9,16,18,9,5,2,5,13,3,10,19,9,14,3],
//     [12,11,16,1,10,12,6,18,6,6,18,10,9,5,2],
//     [17,9,6,6,14,9,2,2,13,13,15,17,15,3,14],
//     [18,14,12,6,18,16,4,10,19,5,6,8,9,1,6]]);


// missing [3, 27]
// [[0,29],[1,28],[2,27],[2,28],[3,27],[34,2],[35,2],[35,3],[36,1],[36,2],[37,0],[37,2],[37,3],[38,0],[38,2]]
pacificAtlantic([[11,2,11,0,15,12,4,15,0,14,11,3,19,11,5,11,18,19,4,3,11,1,9,17,5,2,15,18,11,15],[12,10,8,15,4,7,4,5,7,8,5,12,3,3,10,12,16,15,17,13,13,16,0,0,17,17,11,3,14,0],[8,18,1,6,15,16,14,11,9,11,3,4,17,7,2,16,18,2,0,0,16,18,10,15,14,18,10,19,17,6],[14,17,4,13,13,6,16,1,3,18,18,18,4,1,15,4,0,9,19,3,6,7,19,13,11,11,10,19,3,15],[16,6,19,17,19,17,5,12,6,3,1,0,3,10,13,18,4,3,9,0,1,18,9,15,18,3,4,6,1,15],[1,2,12,9,9,7,17,0,1,14,18,1,5,3,0,7,2,19,7,19,1,11,1,3,2,4,0,3,16,18],[18,10,10,3,12,11,7,8,3,16,7,11,11,12,15,1,13,9,8,17,1,9,7,19,1,14,8,10,18,14],[5,19,9,4,10,14,1,5,11,16,11,3,5,4,19,8,11,16,19,12,6,3,18,16,17,8,11,19,7,14],[0,15,17,11,10,13,19,0,10,3,15,19,3,3,3,4,3,12,17,10,5,16,12,5,5,17,5,17,6,6],[8,19,9,3,13,8,13,17,4,12,13,8,13,12,10,10,16,7,2,8,17,3,7,1,7,16,11,19,13,19],[6,19,6,13,10,5,14,7,3,1,10,6,4,8,15,0,0,2,12,13,14,14,7,5,1,16,15,15,4,7],[7,7,11,14,2,4,14,2,2,0,6,11,15,14,11,13,2,3,14,9,16,3,8,15,2,18,15,15,2,2],[7,5,12,10,14,3,6,9,2,1,2,15,0,4,7,9,7,12,15,9,2,13,7,8,7,9,4,3,5,19],[11,9,1,8,0,15,1,6,5,11,14,19,6,11,0,12,1,6,8,7,0,1,2,9,14,4,5,8,3,16],[8,0,11,5,14,4,19,0,6,8,1,10,13,8,18,6,6,4,5,9,10,14,14,13,12,16,4,3,3,11],[0,9,6,19,16,4,5,10,13,19,8,15,14,7,13,11,17,18,14,18,19,11,0,4,12,11,2,8,17,14],[16,19,16,9,9,14,5,13,7,10,18,6,15,12,12,1,11,16,1,8,1,7,16,7,19,6,12,0,15,0],[2,4,18,15,13,9,4,18,19,5,16,7,10,1,7,7,4,4,10,8,13,15,9,4,16,13,6,3,13,7],[3,11,10,13,6,4,0,13,11,4,5,6,19,13,8,10,8,9,2,4,4,11,12,8,12,15,6,1,10,12],[7,6,19,3,2,14,15,6,9,1,6,14,4,15,13,9,14,7,10,12,17,18,6,4,12,4,1,6,6,12],[15,17,9,15,9,15,9,10,10,11,12,17,2,18,11,0,6,11,14,17,2,13,9,13,3,4,3,1,8,11],[17,13,12,17,4,19,19,7,7,13,19,10,4,16,1,18,14,2,9,18,2,8,3,1,10,9,12,6,2,11],[17,12,6,8,3,16,5,2,16,3,13,3,13,9,11,11,5,12,14,16,3,19,16,16,1,14,5,3,17,19],[1,4,0,3,1,17,5,15,2,19,12,7,18,13,1,0,7,2,9,18,10,18,8,9,13,13,8,10,14,14],[9,14,4,18,10,18,3,9,9,17,16,4,19,7,3,18,7,0,10,13,9,10,11,16,3,5,1,2,16,19],[8,10,13,8,7,2,9,4,16,15,5,4,15,7,9,7,15,2,6,17,14,3,13,3,4,15,13,10,8,16],[17,7,19,19,13,12,6,0,11,4,10,4,1,9,15,9,7,7,14,6,7,18,9,13,6,16,5,2,17,1],[2,7,0,4,8,18,4,11,13,4,11,12,3,18,11,2,4,18,3,3,17,9,18,11,9,15,14,19,7,17],[13,1,15,18,4,12,18,18,15,16,7,17,9,15,11,3,9,7,18,13,3,11,7,19,10,10,7,13,7,19],[17,17,14,3,19,7,1,13,9,3,6,16,10,8,14,8,17,18,12,11,4,11,10,15,9,0,4,12,7,15],[4,4,8,1,7,11,13,4,11,5,18,2,16,11,16,13,0,13,13,12,11,15,8,4,0,3,2,9,8,15],[17,4,13,5,3,17,14,4,7,6,6,11,16,18,2,0,3,12,1,5,12,16,3,14,4,16,5,8,15,9],[5,3,17,17,6,4,19,5,4,6,11,4,14,18,4,19,16,15,1,17,3,8,13,14,16,13,18,19,6,4],[15,0,8,15,6,6,11,8,18,2,4,10,18,16,15,8,1,5,9,13,7,19,12,2,9,18,1,15,12,8],[5,0,18,14,1,8,18,15,5,13,15,7,8,8,9,0,14,12,4,17,2,10,9,7,19,7,19,9,7,1],[7,4,16,16,13,4,3,6,15,11,14,7,3,0,5,15,10,13,18,18,11,6,7,9,19,13,4,2,7,9],[9,14,15,11,14,5,15,1,19,15,3,4,0,10,4,1,2,15,18,15,15,2,9,0,3,10,9,16,4,1],[14,13,17,19,0,13,15,9,16,18,5,6,16,16,6,10,14,15,17,5,9,2,5,11,19,19,11,6,15,14],[17,7,19,6,5,19,10,2,11,17,17,13,16,13,19,4,12,3,4,13,7,9,19,9,12,3,16,8,18,13]]);

// var pacificAtlantic = function(matrix) {
//     const rows = matrix.length;
//     if (rows <= 0) {
//         return [];
//     }
//     const cols = matrix[0].length;
//     if (cols <= 0) {
//         return [];
//     }
    
//     const pac = new Array(rows);    
//     const alt = new Array(rows);
//     for (var row = 0; row < rows; row++) {
//         pac[row] = new Array(cols).fill(0);
//         alt[row] = new Array(cols).fill(0);
//     }
    
//     for (var row = 0; row < rows; row++) {
//         for (var col = 0; col < cols; col++) {
//             if (row === 0 || col === 0) {
//                 pac[row][col] = 1;
//             } else if ((matrix[row][col] >= matrix[row - 1][col] && pac[row - 1][col] === 1)   
//                     || (matrix[row][col] >= matrix[row][col - 1] && pac[row][col - 1] === 1)) {
//                 pac[row][col] = 1;
//             }
//         }
//     }
    
//     const result = [];
//     for (var row = rows - 1; row >= 0; row--) {
//         for (var col = cols - 1; col >= 0; col--) {
//             if (row === rows - 1 || col === cols - 1) {
//                 alt[row][col] = 1;
//                 if (pac[row][col] === 1) {
//                     result.push([row, col]);
//                 }
//             } else if ((matrix[row][col] >= matrix[row + 1][col] && alt[row + 1][col] === 1)   
//                     || (matrix[row][col] >= matrix[row][col + 1] && alt[row][col + 1] === 1)) {
//                 alt[row][col] = 1;
//                 if (pac[row][col] === 1) {
//                     result.push([row, col]);
//                 }
//             }
//         }
//     }

//     console.log(pac, alt);
//     return result;
// };
