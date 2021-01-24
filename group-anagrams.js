/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = new Map();
    for (var i = 0; i < strs.length; i++) {
        var sorted = strs[i].split('').sort().join('');
        if (map.has(sorted)) {
            map.get(sorted).push(strs[i]);
        } else {
            map.set(sorted, [strs[i]]);
        }
    }

    var result = [...map.values()];
    console.log(result);
    return result;
};

strs = ["eat","tea","tan","ate","nat","bat"];
groupAnagrams(strs);