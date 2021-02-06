/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    var arr = [];
    var pre = '';
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        arr.push(s[i]);
        if (s[i] !== pre) {
            pre = s[i];
            count = 1;
        } else {
            count += 1;
            if (count === k) {
                while(count--) {
                    arr.pop();
                }
                pre = '';
            }
        }
    }

    var removed = true;
    var arr2 = [];
    while(removed) {
        removed = false;
        pre = '';
        count = 0;
        for (var i = 0; i < arr.length; i++) {
            arr2.push(arr[i]);
            if (arr[i] !== pre) {
                pre = arr[i];
                count = 1;
            } else {
                count += 1;
                if (count === k) {
                    while(count--) {
                        arr2.pop();
                    }
                    pre = '';
                    removed = true;
                }
            }
        }

        if (removed) {
            arr = arr2;
            arr2 = [];
        }
    }

    // console.log(arr);
    return arr.join('');
};

removeDuplicates('abbbcccddc', 2);