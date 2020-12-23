/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var result = 0;
    // var codes = {};
    // for (var i = 1; i <= 26; i++) {
    //     codes[i] = true;
    // }
    var codes = {'0': true, '1': true, '2': true, '3': true, '4': true, '5': true, '6': true};
    var len = s.length;
    var cache = {};

    decode(0);

    function decode(i) {
        if (i === len) {
            return 1;
        }

        if (cache[i]) {
            return cache[i];
        }

        var count = 0;

        if (s[i] !== '0') {
            count = count + decode(i + 1);;
        }

        if ((s[i] === '1' && s[i + 1]) || (s[i] === '2' && codes[s[i + 1]])) {
            count = count + decode(i + 2);
        }
        
        cache[i] = count;
        return count;
    }

    // console.log(cache[0]);
    return cache[0];
};
// numDecodings('226');
numDecodings("111111111111111111111111111111"); // 1346269

numDecodings("111111111111111111111111111111111111111111111");



// var numDecodings = function(s) {
//     var result = 0;
//     var second = {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1};

//     decode(0);

//     function decode(i) {
//         // console.log(i);

//         if (s[i] === '0') {
//             return;
//         }

//         if (i >= s.length - 1) {
//             result++;
//             return;
//         }

//         decode(i + 1);

//         if (s[i] === '1') {
//             decode(i + 2);
//         }

//         if (s[i] === '2' && second[s[i + 1]]) {
//             decode(i + 2);                 
//         }
//     }

//     console.log(result);
//     return result;
// };