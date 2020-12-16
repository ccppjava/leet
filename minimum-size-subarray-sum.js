/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var sum = 0;
    var min = 0;
    
    for (var i = 0, j = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= s) {
            if (!min || min > i - j + 1) {
                min = i - j + 1;
            }
            
            // console.log(i,j,sum,min);
            sum -= nums[j];
            j++;
        }
    }
    
    return min;
};