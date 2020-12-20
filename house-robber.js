/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var max = 0;

    var len = nums.length;
    if (len === 1) {
        return nums[0];
    }

    var cache = {};

    robit(0, 0);
    robit(1, 0)

    function robit(index, sum) {
        if (nums[index]) {
            sum = sum + nums[index];
        }
        // console.log(index, sum, max);
        if (index >= len - 2) {
            if (sum > max) {
                max = sum;
            }

            return;
        }

        if (cache[index] !== undefined && cache[index] >= sum) {
            // other branch has better result
            return;
        } else {
            cache[index] = sum;
        }

        robit(index + 2, sum);
        robit(index + 3, sum);
    }    

    return max;
};
