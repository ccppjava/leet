/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var result = -1;
    
    find(0, nums.length - 1, '*');
    
    function find(i, j, debug) {
        console.log(i, j, debug);
        if (target === nums[i]) {
            result = i;
            return;
        }
        if (target === nums[j]) {
            result = j;
            return;
        }
        
        if (i + 1 >= j) {
            return;
        }
        
        var mid = Math.ceil((i + j) / 2);
        if (target === nums[mid]) {
            result = mid;
            return;
        }
        
        if (target > nums[i]) {
            if (nums[mid] > nums[i]) {  // peak within mid & j
                if (target > nums[mid]) {
                    find(mid, j, 1);
                } else {
                    find(i, mid, 2);
                }
            } else {    // peak within i & mid
                // target is surely > nums[mid], since target > nums[i]
                find(i, mid, 3);
            }
        } else {
            if (nums[mid] > nums[i]) {  // peak within mid & j
                find(mid, j, 4);
            } else {  // peak within i & mid
                if (target > nums[mid]) {
                    find(mid, j, 5);
                } else {
                    find(i, mid, 6);
                }
            }
        }
    }
    
    console.log(result);
    return result;
};

// search([4,5,6,7,0,1,2], 0);

// search([4,5,6,7,0,1,2], 3);

// search([1], 0);

search([1,3], 2);