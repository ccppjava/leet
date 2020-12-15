/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    start = start.split('')
    end = end.split('')

    while (true) {
        var swapped = false;
        var XL = -1;
        var RX = -1;

        for (var i = 0; i < start.length; i++) {
            // console.log("loop ", i, start[i], end[i], XL, RX);
            if (start[i] === end[i]) {
                // if ((XL < 0 && RX < 0) || (start[i] === 'X')) {
                //     continue;
                // }  
                
                if (RX >= 0 && start[i] === 'L') {
                    // console.log(10);
                    return false;
                } else if (XL >=0 && start[i] === 'R') {
                    // console.log(20);
                    return false;
                } else {
                    continue;
                }
            }

            if (RX < 0 && start[i] === 'X' && end[i] === 'L') {
                XL = i;
                continue;
            } else if (XL < 0 && start[i] === 'R' && end[i] === 'X') {
                RX = i;
                continue;
            } else if (XL >= 0 && start[i] === 'L' && end[i] === 'X') {
                // console.log("XL -> ", XL, RX, i);
                swapped = true;
                start[XL] = 'L';
                start[i] = 'X';
                XL = -1;
                continue;
            } else if (RX >= 0 && start[i] === 'X' && end[i] === 'R') {
                // console.log("RX -> ", XL, RX, i);
                swapped = true;
                start[RX] = 'X';
                start[i] = 'R';
                RX = -1;
                continue;
            } else if (!swapped) {
                
                // console.log(start.join(''), '***');
                // console.log(30);
                return false;
            }
        }

        // console.log(start.join(''), swapped);

        if (!swapped) {
            break;
        }
    }

    return start.join('') === end.join('');
};
