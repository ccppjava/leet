/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    var row = grid.length;
    var col = grid[0].length;

    var rotten = new Set();
    var rotting = new Set();
    var good = new Set();

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                good.add(i * 100 + j);
            } else if (grid[i][j] === 2) {
                rotten.add(i * 100 + j);
            }
        }
    }

    var result = 0;
    var hasRotten = true;
    while(good.size > 0 && hasRotten) {
        // console.log(rotten, good);

        hasRotten = false;
        good.forEach(l => {
            if (rotten.has(l + 100) || rotten.has(l - 100) ||
                rotten.has(l + 1) || rotten.has(l - 1)) {

                hasRotten = true;
                rotting.add(l);
                good.delete(l);
            }
        });

        if (hasRotten) {
            result++;
        }

        rotting.forEach(l => {
            rotten.add(l);
            rotting.delete(l);
        });
    }

    // console.log(result);
    return result > 0 && good.size === 0 ? result : -1;
};

orangesRotting([[2,1,1],[1,1,0],[0,1,1]]);

orangesRotting([[0,2]]);