/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    exec(nums, []);

    function exec(arr, target) {
        // console.log(arr, target, result, '\n\n');

        if (arr.length === 1) {
            target.push(arr[0]);
            result.push([...target]);
            return;
        }

        for (var i = 0; i < arr.length; i++) {
            var tg = [...target, arr[i]];
            var cp = [...arr];
            cp.splice(i, 1);
            exec(cp, tg);
        }
    }

    // console.log(result);
    return result;
};

permute([1,2,3]);