/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var results = [];
    var resultHash = {};

    getNumbers([], new Set());

    function getNumbers(result, indexSet) {
        console.log('>>>', result);

        if (result.length === nums.length) {
            if (!resultHash[result]) {
                console.log(result);
                results.push(result);
                resultHash[result] = true;
            }
        } else {
            for (var i = 0; i < nums.length; i++) {
                if (!indexSet.has(i)) {
                    var set = new Set(indexSet);
                    set.add(i);
                    getNumbers([...result, nums[i]], set);
                }
            }
        }
    }

    console.log(results);
    return results;
};

permuteUnique([1,2,3]);