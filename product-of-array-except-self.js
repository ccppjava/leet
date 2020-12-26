/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = [];

    var product = 1;
    for (var i = 0; i < nums.length; i++) {
        if (i > 0) {
            product = product * nums[i - 1];
        }
        result[i] = product;
    }

    product = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (i < nums.length - 1) {
            product = product * nums[i + 1];
        }

        result[i] = result[i] * product;
    }

    console.log(result);
    return result;
};

productExceptSelf([1,2,3,4]);