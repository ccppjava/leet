/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = -1;
    var count = height.length;
    for (var i = 0; i < count - 1; i++) {
        for (var j = i + 1; j < count; j++) {
            var size = (j - i) * Math.min(height[i], height[j]);
            if (size > max) {
                max = size;
            }
        }
    }
    
    return max;
};