/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    if (!firstList.length || !secondList.length) {
        return [];
    }
    
    var result = [];
    var f = firstList.shift();
    var s = secondList.shift();
    while (f && s && f.length && s.length) {
        // console.log(f, s);
        // if (!f.length || !s.length) {
        //     break;
        // }
        
        if (f[1] < s[0]) {
            f = firstList.shift();
        } else if (s[1] < f[0]) {
            s = secondList.shift();
        } else if (f[1] <= s[1]) {
            var start = Math.max(f[0], s[0]);
            result.push([start, f[1]]);
            f = firstList.shift();
        } else {
            var start = Math.max(f[0], s[0]);
            result.push([start, s[1]]);
            s = secondList.shift();
        }
    }
    
    return result;
};