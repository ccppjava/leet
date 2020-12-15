var lexicalOrder = function(n) {
    var result = [];
    appendNumber(result, 0, n);
    return result;
};

function appendNumber(result, i, n) {
    if (i * 10 > n) {
        return;
    }

    for (var j = i * 10; j <= i * 10 + 9; j++) {
        if (j === 0) {
            continue;
        }

        if (j <= n) {
            result.push(j);
        }

        appendNumber(result, j, n);
 
    }
}