/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    if (stones[0] !== 0 || stones[1] !== 1) {
        return false;
    }
    
    if (stones.length === 2) {
        return true;
    }

    // for (i = stones.length - 1; i > 2; i--) {
    //     console.log(stones[i], stones[i -1]);
    //     if (stones[i] > 2 * stones[i - 1]) {
    //         return false;
    //     }
    // }

    var visited = {};
    var stoneSet = new Set(stones);
    return jump(stoneSet, visited, 1, 1, stones[stones.length - 1]);  
};

function jump(stones, visited, position, step, last) {
    if (position === last) {
        return true;
    }

    if (visited[[position,step]]) {
        return false;
    }
    
    var result = false;
    
    if (stones.has(position + step + 1)) {
        result = jump(stones, visited, position + step + 1, step + 1, last) || result;
    }
    if (result) {
        return true;
    }

    if (stones.has(position + step)) {
        result = jump(stones, visited, position + step, step, last) || result;
    }
    if (result) {
        return true;
    }

    if (step - 1 > 0 && stones.has(position + step - 1)) {
        result = jump(stones, visited, position + step - 1, step - 1, last) || result; 
    }
    if (result) {
        return true;
    }

    visited[[position,step]] = 1;
    return result;
}
