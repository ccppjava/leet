/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var index = 0, count = 1, char = chars[0];
    for (var i = 1; i < chars.length; i++) {
        if (chars[i] !== char) {
            // console.log('->', i, index, count, char, chars[i]);
            if (count > 1) {
                if (count < 10) {
                    chars[++index] = '' + count; 
                } else {
                    var nums = ('' + count).split('');
                    for (var j = 0; j < nums.length; j++) {
                        chars[++index] = nums[j];
                    }
                }
            }
            chars[++index] = chars[i];
            // index = i;
            char = chars[i];
            count = 1;
        } else {
            // console.log('=>', i, index, count, char, chars[i]);
            count++;
        }
    }

    if (count > 1) {
        // result = [...result, char, ...('' + count).split('')];
        // result.push(char);
        // result = result.concat(('' + count).split(''));
        // chars[++index] = '' + count; 
        if (count < 10) {
            chars[++index] = '' + count; 
        } else {
            var nums = ('' + count).split('');
            for (var j = 0; j < nums.length; j++) {
                chars[++index] = nums[j];
            }
        }
    }

    // console.log(chars, index + 1);
    return index + 1;
};

// compress(["a","a","b","b","c","c","c"]);

compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);











/**
 * @param {character[]} chars
 * @return {number}
 */
/*
var compress = function(chars) {
    var char, count, result = [];
    for (var i = 0; i < chars.length; i++) {
        if (chars[i] !== char) {
            if (count > 0) {
                // result = [...result, char, ...('' + count).split('')];
                result.push(char);
                result = result.concat(('' + count).split(''));
            }
            char = chars[i];
            count = 1;
        } else {
            count++;
        }
    }

    // result = [...result, char, ...('' + count).split('')];
    result.push(char);
    result = result.concat(('' + count).split(''));
    
    // console.log(result);
    return result;
};
*/
