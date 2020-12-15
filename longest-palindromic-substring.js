/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s;
    }

    var palindrome = '';
    for (var i = 0; i < s.length; i++) {
        var c1 = s[i];
        for (var j = s.length - 1; j > i; j--) {
            var c2 = s[j];
            if (c1 !== c2) {
                continue;
            } else {
                var p = findPalindrome(s, i, j);
                if (p && p.length > palindrome.length) {
                    palindrome = p;
                }
            }
        }
    }

    return palindrome ? palindrome : s[0];
};

function findPalindrome(s, i, j) {
    var size = j - i + 1;
    if (size <= 3) {
        return s.substring(i, j + 1);
    }

    var x, y;
    if (size % 2 == 1) {
        x = i + (size - 1) / 2;
        y = x;
    } else {
        x = i + size / 2;
        y = j - size / 2;
    }

    while (x >= i && y <= j) {
        if (s[x] !== s[y]) {
            break;
        }
        x--;
        y++;
    }
    x++;
    y--;

    // console.log(i,j,x,y,x<y);
    if (x < y) {
        return s.substring(x, y + 1);
    }
}
