/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    for (var i = points.length - 1; i >= 0; i--) {
        points[i].d = points[i][0] * points[i][0] + points[i][1] * points[i][1];
    }

    points.sort((a, b) => a.d - b.d);

    var result = points.slice(0, K);
    return result;
};