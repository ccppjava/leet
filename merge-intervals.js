/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    var rest = intervals;
    var results = [];

    while (rest.length) {
        var remain = [];
        var result = rest[0];
        var merged = false;

        for (var i = 1; i < rest.length; i++) {
            var [min, max] = rest[i];
            if (min > result[1] || max < result[0]) {
                remain.push(rest[i]);
                continue;
            }

            result[0] = Math.min(result[0], min);
            result[1] = Math.max(result[1], max);
            merged = true;
        }

        if (!merged) {
            results.push(result);
        } else {
            remain.unshift(result);
        }

        rest = remain;
        // console.log(results, '**********', rest);
    }

    // console.log(results);
    return results;
};

merge([[1,3],[2,6],[8,10],[15,18]]);
merge([[2,3],[4,5],[6,7],[8,9],[1,10]]);