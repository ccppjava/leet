
var findOrder = function(numCourses, prerequisites) {
    var depends = {};
    for (var i = 0; i < prerequisites.length; i++) {
        var [first, second] = prerequisites[i];
        if (depends[first] && depends[first].has(second)) {
            // dependency dead lock
            return [];
        }
        var set = depends[second];
        if (set) {
            set.add(first);
        } else {
            depends[second] = new Set([first]);
        }
    }

    // console.log(depends);

    while(true) {
        var updated = false;
        for (const dep of Object.keys(depends)) {
            var set, done;
            if (!depends[dep].all) {
                // first loop
                set = depends[dep];
                done = new Set();
                depends[dep] = {all: set, done: done};
            } else {
                set = depends[dep].all;
                done = depends[dep].done;
            }

            for (const item of set) {
                var subSet = depends[item];

                // console.log(dep, item, set, subSet, typeof(subSet));

                if (subSet !== undefined) {
                    // console.log('---', done.has(item));
                    if (!done.has(item)) {
                        done.add(item);

                        if (subSet && subSet.all) {
                            subSet = subSet.all;
                        }

                        for (const sub of subSet) {
                            set.add(sub);
                        }

                        updated = true;
                    }
                }
            }
        }

        // if dependencies length will not change by replace dependency with its dependencies
        if (!updated) {
            break;
        }
    }

    for (var i = 0; i < prerequisites.length; i++) {
        var [first, second] = prerequisites[i];

        if (depends[first] && depends[first].all.has(second)) {
            // dependency dead lock
            return [];
        }
    }

    var ordered = Object.keys(depends)
        .sort((a, b) => depends[b].all.size - depends[a].all.size)
        .map(a => parseInt(a));

    for (var i = 0; i < numCourses; i++) {
        if (depends[i] === undefined) {
            ordered.push(i);
        }
    }

    // console.log(depends);
    // console.log(ordered);
    return ordered;
};

