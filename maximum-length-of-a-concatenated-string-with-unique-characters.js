/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const len = arr.length;
    let indexes = new Array(len);
    for (let i = 0; i < len; i++) {
        indexes[i] = i;
    }

    let result = 0;
    let done = false;
    
    function search(p, visited, max) {
        if (max > result) {
            result = max;
        }

        if (done) {
            return;
        }

        if (p.length === len) {

            done = true;
            return;
        }

        for (let i = 0; i < len; i++) {
            if (p.indexOf(i) < 0) {
                p.push(i);
                
                let count = 0;
                let str = arr[i];
                let end = false;
                for (let j = 0; j < str.length; j++) {
                    if (visited[str[j]]) {
                        end = true;
                        break;
                    }

                    visited[str[j]] = 1;
                    count++;
                }

                if (!end) {
                    search(p, visited, max + count);
                }

                for (let j = 0; j < count; j++) {
                    visited[str[j]] = 0;
                }
                p.pop();
            }
        }
    }

    search([], {}, 0);
    console.log(result);

    return result;
};

maxLength(["yy","bkhwmpbiisbldzknpm"]); // 0
maxLength(["un","iq","ue"]);    // 4
maxLength(["cha","r","act","ers"]); //6
maxLength(["abcdefghijklmnopqrstuvwxyz"]);  //26
maxLength(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]);   // 16
maxLength(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po"]);   // 16










// mis-understood the question, and thought it is to find out the longest un-repeat portion after combined
//
// /**
//  * @param {string[]} arr
//  * @return {number}
//  */
// var maxLength = function(arr) {
//     const len = arr.length;
//     let indexes = new Array(len);
//     for (let i = 0; i < len; i++) {
//         indexes[i] = i;
//     }

//     let result = 0;
//     let done = false;
    
//     function search(p, visited, max) {
//         if (done) {
//             return;
//         }

//         if (p.length === len) {
//             if (max > result) {
//                 result = max;
//             }

//             done = true;
//             return;
//         }

//         for (let i = 0; i < len; i++) {
//             if (p.indexOf(i) < 0) {
//                 p.push(i);
                
//                 let count = 0;
//                 let str = arr[i];
//                 let end = false;
//                 for (let j = 0; j < str.length; j++) {
//                     if (visited[str[j]]) {
//                         if (max + count > result) {
//                             result = max + count;
//                         }

//                         end = true;
//                         break;
//                     }

//                     visited[str[j]] = 1;
//                     count++;
//                 }

//                 if (!end) {
//                     search(p, visited, max + count);
//                 }

//                 for (let j = 0; j < count; j++) {
//                     visited[str[j]] = 0;
//                 }
//                 p.pop();
//             }
//         }
//     }

//     search([], {}, 0);
//     // console.log(result);

//     return result;
// };






// /**
//  * @param {string[]} arr
//  * @return {number}
//  */
// var maxLength = function(arr) {
//     const len = arr.length;
//     let indexes = new Array(len);
//     for (let i = 0; i < len; i++) {
//         indexes[i] = i;
//     }

//     let result = 0;
//     let done = false;
//     function search(indexes, max, visited) {
//         if (max > result) {
//             result = max;
//         }

//         if (indexes.length === 0) {
//             result = max;
//             done = true;
//             return;
//         }

//         if (done) {
//             return;
//         }
//         // console.log(indexes, max, visited);

//         for (let i = 0; i < indexes.length; i++) {
//             let vis = new Set([...visited]);
//             let count = 0;
//             let str = arr[indexes[i]];

//             // console.log(str);
//             let end = false;
//             for (let j = 0; j < str.length; j++) {
//                 if (vis.has(str[j])) {
//                     if (max + count > result) {
//                         result = max + count;
//                     }

//                     end = true;
//                     break;
//                 }

//                 vis.add(str[j]);
//                 count++;
//             }

//             if (end) {
//                 continue;
//             }

//             let ins = [...indexes];
//             ins.splice(i, 1);
//             search(ins, max + count, vis);
//         }
//     }

//     search(indexes, 0, new Set());
//     console.log(result);

//     return result;  
// };