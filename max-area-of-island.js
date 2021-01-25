/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var visited = new Set();
    
    var rlen = grid.length;
    if (rlen === 0) {
        return 0;
    }
    var clen = grid[0].length;
    if (clen === 0) {
        return 0;
    }
    
    var max = 0;
    for (var i = 0; i < rlen; i++) {
        for (var j = 0; j < clen; j++) {
            if (grid[i][j] && !visited.has(i * 100 + j)) {
                var set = new Set();
                find(i, j, set);

                if (set.size > max) {
                    max = set.size;
                }
            } 
        }
    }

    return max;

    function find(i, j, set) {
        var key = i * 100 + j;
        set.add(key);
        visited.add(key);

        if (i + 1 < rlen && grid[i+1][j] && !set.has((i + 1) * 100 + j)) {
            find(i + 1, j, set);
        }

        if (i - 1 >= 0 && grid[i-1][j] && !set.has((i - 1) * 100 + j)) {
            find(i - 1, j, set);
        }

        if (j + 1 < clen && grid[i][j+1] && !set.has(i * 100 + j + 1)) {
            find(i, j + 1, set);
        }

        if (j - 1 >= 0 && grid[i][j-1] && !set.has(i * 100 + j - 1)) {
            find(i, j - 1, set);
        }
    }
};

var result = maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]);

console.log(result);