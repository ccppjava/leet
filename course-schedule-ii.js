/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var result = [];
    var resultSet = new Set();
    var hasLoop = false;

    for (var i = 0; i < prerequisites.length; i++) {
        if (!prerequisites[i].visited) {
            findParents(prerequisites, prerequisites[i]);
        }

        if (hasLoop) {
            return [];
        }
    }

    if (result.length != numCourses) {
        for (var i = 0; i < numCourses; i++) {
            if (!resultSet.has(i)) {
                result.push(i);
            }
        }
    }
    // console.log(prerequisites);
    return result;
    
    function findParents(depends, node) {
        findRoot(node);

        if (hasLoop) {
            return;
        }
 
        function findRoot(current) {

            var [first, second] = current;
            // console.log(first, second);
            
            for (var i = 0; i < depends.length; i++) {
                var [x, y] = depends[i];

                if (second === x) { // found a pair that start with end of calling pair
                    if (depends[i].visited) {
                        if (!resultSet.has(x)) {
                            // console.log("LOOP");
                            hasLoop = true;
                            return;
                        } else {
                            break;
                        }
                    } else {
                        depends[i].visited = true;
                    }
                    
                    findRoot(depends[i]);
                }
            }
            
            if (!hasLoop && !resultSet.has(second)) {
                result.push(second);
                resultSet.add(second);
                // console.log(">>", result);
            }
        }
    }
};