/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var queue = [];
    var num = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c >= '0' && c <= '9') {
            num.push(c);
        } else if (c === '+' || c === '-' || c === '*' || c === '/') {
            var number = parseInt(num.join(''), 10);
            queue.push(number);
            num = [];
            queue.push(c);
        }
    }
    var number = parseInt(num.join(''), 10);
    queue.push(number);
    num = [];

    var queue2 = [];
    for (var i = 0; i < queue.length; i++) {
        if (queue[i] === '*') {
            var last = queue2.pop();
            var result = last * queue[i+1];
            i++;
            queue2.push(result);
        } else if (queue[i] === '/') {
            var last = queue2.pop();
            var result = Math.floor(last / queue[i+1]);
            i++;
            queue2.push(result);
        } else {
            queue2.push(queue[i]);
        }
    }
    
    var result = queue2.shift();
    for (var i = 0; i < queue2.length; i++) {
        if (queue2[i] === '+') {
            result += queue2[i+1];
            i++;
        } else if (queue2[i] === '-') {
            result -= queue2[i+1];
            i++;
        }
    }
    
    // console.log(result);
    return result;
};