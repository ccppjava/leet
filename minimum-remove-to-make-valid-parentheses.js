/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    var remove = [];
    var queue = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c === '(') {
            queue.push(i);
        } else if (c === ')') {
            if (queue.length) {
                queue.pop();
            } else {
                remove.push(i);
            }
        }
    }

    remove = [...remove, ...queue];
    var reset = new Set(remove);
    if (remove.length) {
        var result = [];
        for (var i = 0; i < s.length; i++) {
            if (!reset.has(i)) {
                result.push(s[i]);
            }
        }
        return result.join('');
    }
    return s;
};

var result = minRemoveToMakeValid("lee(t(c)o)de)");
console.log(result);