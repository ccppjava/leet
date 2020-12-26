/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var result = [];

    var times = [];
    var begins = [];
    var opens = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            for (var j = i - 1; j >=0; j--) {
                if (!s[j].match(/\d/)) {
                    break;
                }
            }
            j++;
            times.push(parseInt(s.substring(j, i)));
            begins.push(j);
            opens.push(i);
        }

        if (s[i] === ']') {
            var open = opens.pop();
            var str = s.substring(open + 1, i);
            var time = times.pop();
            var str = str.repeat(time);
            var begin = begins.pop();
            // console.log(i, begin, open, time, str);
            var change = i + 1 - begin - str.length;
            s = s.substring(0, begin) + str + s.substr(i + 1);
            // console.log(i, change, s);
            i = i - change;
        }
    }

    // console.log(s);
    return s;
};

var result = decodeString("abc3[cd]xyz");
console.log(result === "abccdcdcdxyz");

result = decodeString("3[a2[c]]");
console.log(result === "accaccacc");