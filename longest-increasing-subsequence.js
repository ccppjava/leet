/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const len = nums.length;
    const dp = new Map();
    
    function search(index) {
        // console.log(index, dp);
        
        if (dp.has(index)) {
            return dp.get(index);
        }
        
        var max = 1;
        for (let i = index; i < len; i++) {
            if (nums[i] > nums[index]) {
                var count = search(i) + 1;
            }
            
            if (count > max) {
                max = count;
            }
        }
        
        dp.set(index, max);
        return max;
    }
    
    var max = 1;
    for (var i = 0; i < len; i++) {
        var count = search(i);
        if (count > max) {
            max = count;
        }
    }
    
    return max;
};