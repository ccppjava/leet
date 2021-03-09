/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    const len = nums.length;
    let result = Infinity;
    let diff = Infinity;
    
    let indexes = [];
    function check() {
        if (indexes.length === 3) {
            // console.log(indexes);
            let sum = nums[indexes[0]] + nums[indexes[1]] + nums[indexes[2]];
            if (diff > Math.abs(sum - target)) {
                result = sum;
                diff = Math.abs(sum - target);
                // console.log(result, diff);
            }
            return;
        }
        
        for (var i = 0; i < len; i++) {
            if (indexes.indexOf(i) < 0) {
                indexes.push(i);
                check();
                indexes.pop();
            }
        }    
    }
    check();
    
    return result;
};