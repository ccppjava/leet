/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    var length = mountainArr.length();
    
    if (length <= 100) {
        for (var i = 0; i < 100; i++) {
            if (mountainArr.get(i) === target) {
                return i;
            }
        }
        
        return -1;
    }
    
    return searchSection(target, mountainArr, 0, length - 1, 1);
}

function searchSection(target, mountainArr, start, end, loopCount) {
    var startVal = mountainArr.get(start);
    var endVal = mountainArr.get(end);
    if (target < startVal && target < endVal) {
        return -1;
    }
    
    if (target === startVal) {
        return start;
    }
    
    var length = end - start + 1;
    var sectionSize = 11;   // hardcode for now
    var startIndex = -1;
    var endIndex = -1;
    var previousValue = startVal;
    var step = Math.floor(length / sectionSize);
    for (var i = start; i <= end; i = i + step) {
        var val = mountainArr.get(i);
        if (val > target) {
            startIndex = i - step;
            endIndex = i;
            break;
        }
        
        if (val < previousValue) {
            startIndex = i > 2 * step ? i - 2 * step : i - step;
            endIndex = i;
            break;
        }
        
        previousValue = val;
    }
    
    if (startIndex < 0) {
        startIndex = i - step;
        endIndex = length - 1;
    }
    
    console.log(start, end, startIndex, endIndex, step, i);
    
    if (step < 100 - sectionSize * loopCount) {
        for (var i = startIndex; i <= endIndex; i++) {
            if (mountainArr.get(i) === target) {
                return i;
            }
        }
        
        return -1;
    }
    
    return searchSection(target, mountainArr, startIndex, endIndex, loopCount + 1);
}