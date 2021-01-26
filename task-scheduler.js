/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (n === 0) {
        return tasks.length;
    }
    
    var ts = new Map();
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        if (ts.has(task)) {
            ts.set(task, (ts.get(task) + 1));
        } else {
            ts.set(task, 1);
        }
    }

    var reverse = new Map();
    ts.forEach((value, key) => {
        if (!reverse.has(value)) {
            reverse.set(value, new Set());
        }

        reverse.get(value).add(key);
    });

    var result = [];
    var ws = new Map();

    while(reverse.size > 0) {
        execNext();
    }

    // console.log(result.length, result);
    return result.length;

    function execNext() {
        // console.log(result, ws, reverse);

        var found = null;
        var sortedPriorities = [...reverse.keys()].sort((a, b) => b - a);
        for (var i = 0; i < sortedPriorities.length; i ++) {
            var priority = sortedPriorities[i];
            var candidates = reverse.get(priority);
            // console.log(priority, candidates);

            candidates.forEach(candidate => {
                if (!ws.has(candidate) || ws.get(candidate) === 0) {
                    found = candidate;
                    return;
                }
            });

            if (found) {
                result.push(found);
                ws.forEach((value, key) => {
                    if (value <= 1) {
                        ws.delete(key);
                    } else {
                        ws.set(key, value - 1);
                    }
                });

                ws.set(found, n);

                // task placed once, adjust its priority
                reverse.get(priority).delete(found);
                if (reverse.get(priority).size === 0) {
                    reverse.delete(priority);
                }

                if (priority > 1) {
                    if (!reverse.has(priority - 1)) {
                        reverse.set(priority - 1, new Set());
                    }

                    reverse.get(priority - 1).add(found);
                }

                return;
            }
        }

        if (!found) {
            result.push('idle');
            ws.forEach((value, key) => {
                if (value <= 1) {
                    ws.delete(key);
                } else {
                    ws.set(key, value - 1);
                }
            });
        }
    } 
};

leastInterval(["A","A","A","B","B","B"], 2);

leastInterval(["A","A","A","B","B","B"], 0);

leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2);