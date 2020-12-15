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

    for (i = stones.length - 1; i > 2; i--) {
        if (stones[i] > 2 * stones[i - 1]) {
            return false;
        }
    }

    // if (stones[stones.length - 1] > stones[stones.length - 2] * 2) {
    //     return false;
    // }

    var visited = {};
    return jump(stones, visited, 1, 1);
    
};


function jump(stones, visited, position, step) {
    if (stones.indexOf(position) === stones.length - 1) {
        visited[position,step] = true;
        return true;
    }

    if (visited[position,step]) {
        return visited[position,step];
    }
    
    var result = false;
    
    if (stones.indexOf(position + step + 1) > -1) {
        result = jump(stones, visited, position + step + 1, step + 1) || result;
    }
    if (result) {
        visited[position,step] = true;
        return true;
    }

    if (stones.indexOf(position + step) > -1) {
        result = jump(stones, visited, position + step, step) || result;
    }
    if (result) {
        visited[position,step] = true;
        return true;
    }

    if (step - 1 > 0 && stones.indexOf(position + step - 1) > -1) {
        result = jump(stones, visited, position + step - 1, step - 1) || result; 
    }
    if (result) {
        visited[position,step] = true;
        return true;
    }
    
    visited[position,step] = result;
    return result;
}