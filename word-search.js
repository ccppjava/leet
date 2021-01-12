/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var word_len = word.length;
    var column_len = board.length;
    var row_len = board[0].length;
    var found = false;

    for (var i = 0; i < column_len; i++) {
        var row = board[i];
        if (found) {
            return found;
        }

        for (var j = 0; j < row_len; j++) {
            if (found) {
                return found;
            }
            
            if (row[j] === word[0]) {
                search(i, j, 1, [i * 1000 + j]);
            }
        }
    }


    function search(i, j, index, visited) {
        // console.log(i, j, index, board[i][j], word[index - 1]);
        if (index >= word_len || found) {
            found = true;    // already found all
            return;
        }


        if (j < row_len - 1 && board[i][j + 1] === word[index]) {
            
            var hash = i * 1000 + j + 1;
            if (visited.indexOf(hash) < 0) {
                // console.log(i, j, '>');
                search(i, j + 1, index + 1, [...visited, hash]);
            }
        }

        if (i < column_len - 1 && board[i + 1][j] === word[index]) {
            
            var hash = (i + 1) * 1000 + j;
            if (visited.indexOf(hash) < 0) {
                // console.log(i, j, '\\/');
                search(i + 1, j, index + 1, [...visited, hash]);
            }
        }

        if (j > 0 && board[i][j - 1] === word[index]) {
            
            var hash = i * 1000 + j - 1;
            if (visited.indexOf(hash) < 0) {
                // console.log(i, j, '<');
                search(i, j - 1, index + 1, [...visited, hash]);
            }
        }

        if (i > 0 && board[i - 1][j] === word[index]) {
            
            var hash = (i - 1) * 1000 + j;
            if (visited.indexOf(hash) < 0) {
                // console.log(i, j, '^');
                search(i - 1, j, index + 1, [...visited, hash]);
            }
        }
    }

    return found;
};


var result = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB");
console.log(result);

result = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE");
console.log(result);