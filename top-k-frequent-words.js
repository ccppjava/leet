/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    var wordF = new Map();
    for (var i = words.length - 1; i >= 0; i--) {
        var word = words[i];
        if (wordF.has(word)) {
            wordF.set(word, wordF.get(word) + 1);
        } else {
            wordF.set(word, 1);
        }
    }

    var wordFV = new Map();
    for (var [key, value] of wordF) {
        if (wordFV.has(value)) {
            wordFV.get(value).push(key);
        } else {
            wordFV.set(value, [key]);
        }
    }

    wordFV = new Map([...wordFV].sort((a, b) => b[0] - a[0]));
    var result = [];
    for (var [key, value] of wordFV) {
        if (result.length === k) {
            break;
        }

        if (result.length + value.length <= k) {
            result = [...result, ...value.sort()];
        } else {
            result = [...result, ...value.sort().slice(0, k - result.length)];
        }
    }

    // console.log(result);
    return result;
};

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3);