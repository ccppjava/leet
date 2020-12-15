// perfect-squares

var past = {};
var squares = [];

var numSquares = function(n, max) {
    if (past[n]) {
        return past[n];
    }

    if (!max) {
        max = Math.floor(Math.sqrt(n));
    }

    if (n === max * max) {
        return 1;
    }
    
    for (var i = squares.length + 1; i <= max; i++) {
        squares.push(i * i);
        past[i * i] = 1;
    }

    var minCount = n;

    while (max > 0) {
        var num = n;

        for (var i = max; i >= 0; i--) {
            if (squares[i] <= num) {
                // console.log(max, i, squares[i], minCount);
                num = num - squares[i];
                break;
            }
        }

        var count = numSquares(num);

        // console.log("out loop", minCount, count);

        if (minCount > count) {
            minCount = count;
        }

        max--;
    }

    past[n] = minCount + 1;

    return minCount + 1;
};

var result = numSquares(133);
console.log(result);

// var result = numSquares(133);
// console.log(result);

var result = numSquares(2752);
console.log(result);

// var result = numSquares(43);
// console.log(result);

// var result = numSquares(63);
// console.log(result);

// var result = numSquares(13);
// console.log(result);

// var result = numSquares(2);
// console.log(result);

// var result = numSquares(18);
// console.log(result);