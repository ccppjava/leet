/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = new Set();

    function populate(str, left, right) {
        // console.log(str, left, right);
        if (left === n && right === n) {
            return result.add(str);
        }

        if (left === n && right < n) {
            return populate(str + ')', left, right + 1);
        }

        if (left === right) {
            return populate(str + '(', left + 1, right)
        }

        populate(str + '(', left + 1, right);
        populate(str + ')', left, right + 1);
    }

    populate('(', 1, 0);

    // console.log(result);
    return [...result];
};

generateParenthesis(1);

generateParenthesis(3);
