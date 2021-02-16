/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    var max = Number.NEGATIVE_INFINITY;
    var stack = [0];

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (max < 0) {
                max = 0;
            }
            process(i);
        } else if (nums[i] < 0) {
            stack.push(i);
        }
    }
    process(nums.length);
    
    
    function process(end) {
        // console.log(stack, end, max, maxRange);
        if (stack.length % 2 === 1) {
            var start = stack.shift();
            var p = product(start, end);
            if (p > max) {
                max = p;
            }
        } else if (stack.length === 2) {
            var start = stack.shift();
            var mid = stack.shift();
            var left = product(start, mid);
            var right = product(mid + 1, end);
            max = Math.max(left, nums[mid], right, max);
        } else {
            var start = stack.shift();
            var l = stack.shift();
            var r = stack.pop();
            var pl = product(start, r);
            var pr = product(l + 1, end);
            max = Math.max(pl, pr, max);
        }
        
        stack = [end + 1];
    }
        

    function product(start, end) {
        if (start === end) {
            return Number.NEGATIVE_INFINITY;
        }
        
        var result = 1;
        for (var i = start; i < end; i++) {
            result = result * nums[i];
        }
        
        return result;
    }

    // console.log(max);
    return max;
};


// maxProduct([2,3,-2,4]);
// maxProduct([-2]);
// maxProduct([0,2]);
maxProduct([-2,0,-1]);

















// var maxProduct = function(nums) {
    
//     var max = Number.NEGATIVE_INFINITY;
//     var maxRange;
//     var stack = [0];

//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             if (max < 0) {
//                 max = 0;
//             }
//             process(i);
//         } else if (nums[i] < 0) {
//             stack.push(i);
//         }
//     }
//     process(nums.length);
    
    
//     function process(end) {
//         console.log(stack, end, max, maxRange);
//         if (stack.length % 2 === 1) {
//             var start = stack.shift();
//             var p = product(start, end);
//             if (p > max) {
//                 max = p;
//                 maxRange = [start, end - 1];
//             }
//         } else if (stack.length === 2) {
//             var start = stack.shift();
//             var mid = stack.shift();
//             var left = product(start, mid);
//             if (left > max) {
//                 max = left;
//                 maxRange = [start, mid -1];
//             }
//             var right = product(mid + 1, end);
//             if (right > max) {
//                 max = right;
//                 maxRange = [mid + 1, end - 1];
//             }
//             if (nums[mid] > max) {
//                 max = nums[mid];
//                 maxRange = [mid, mid];
//             }

//             console.log(left, right, mid, nums[mid], max);
//         } else {
//             var start = stack.shift();
//             var l = stack.shift();
//             var r = stack.pop();
//             var left = product(start, l + 1);
//             var right = product(r, end);
            
//             if (left <= right) {
//                 var p = product(start, r);
//                 if (p > max) {
//                     max = p;
//                     maxRange = [start, r - 1];
//                 }
//             } else {
//                 var p = product(l + 1, end);
//                 if (p > max) {
//                     max = p;
//                     maxRange = [l + 1, end - 1];
//                 }
//             }
//         }
        
//         stack = [end + 1];
//     }
        

//     function product(start, end) {
//         if (start === end) {
//             return Number.NEGATIVE_INFINITY;
//         }
        
//         var result = 1;
//         for (var i = start; i < end; i++) {
//             result = result * nums[i];
//         }
        
//         return result;
//     }

//     // console.log(max);
//     return max;
// };
