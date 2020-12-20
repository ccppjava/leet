/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    if (X > Y) {
        return X - Y;
    }
    
    var count = 0;
    while (Y > X) {
        if (Y % 2 === 0) {
            Y = Y / 2;
            count++;
        } else {
            Y = (Y + 1) / 2;
            count = count + 2;
        }
    }
    
    return count + X - Y;
};