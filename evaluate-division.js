/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let query = queries[i];
        result.push(find(query));
    }

    function find(query) {
        let visited = new Array(equations.length).fill(0);
        let start = query[0];
        let end = query[1];
        let re = -1;
        
        f(start, 1);
        return re;

        function f(q, val, flag) {
            if (flag) {
                if (q === end) {
                    re = val;
                    return;
                }

                if (start === end) {
                    re = 1;
                    return;
                }
            }

            for (let i = 0; i < equations.length; i++) {
                if (visited[i]) {
                    continue;
                }

                let eq = equations[i];
                if (eq[0] === q) {
                    visited[i] += 1;
                    f(eq[1], val * values[i], true);
                }
                
                if (eq[1] === q) {
                    visited[i] += 1;
                    f(eq[0], val / values[i], true);
                }
            }
        }
    }
    
    console.log(result);
    return result;
};




// [6.00000,0.50000,-1.00000,1.00000,-1.00000]
calcEquation([["a","b"],["b","c"]],
[2.0,3.0],
[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]);

// [3.75000,0.40000,5.00000,0.20000]
calcEquation([["a","b"],["b","c"],["bc","cd"]],
[1.5,2.5,5.0],
[["a","c"],["c","b"],["bc","cd"],["cd","bc"]]);
// calcEquation([["a","b"],["b","c"],["bc","cd"]],
// [1.5,2.5,5.0],
// [["c","b"]]);





// var calcEquation = function(equations, values, queries) {
//     let result = [];
//     for (let i = 0; i < queries.length; i++) {
//         let query = queries[i];
//         result.push(find(query));
//     }

//     function find(q) {
//         let visited = new Array(equations.length).fill(0);
//         let re = -1;
        
//         f(q, 1);
//         return re;

//         function f(q, val) {
//             for (let i = 0; i < equations.length; i++) {
//                 console.log(q, val, i);
//                 if (visited[i]) {
//                     continue;
//                 }

//                 let eq = equations[i];
//                 if (eq[0] === q[0] && eq[1] === q[1]) {
//                     re = values[i] * val;
//                     return;
//                 }
                
//                 if (eq[0] === q[1] && eq[1] === q[0]) {
//                     re = val / values[i];
//                     return;
//                 }
                
//                 if (eq[0] === q[0]) {
//                     visited[i] = 1;
//                     f([eq[1], q[1]], val * values[i]);
//                 }
                
//                 if (eq[0] === q[1]) {
//                     visited[i] = 1;
//                     f([eq[1], q[0]], val / values[i]);
//                 }
                
//                 if (eq[1] === q[0]) {
//                     visited[i] = 1;
//                     f([eq[0], q[1]], val / values[i]);
//                 }
                
//                 if (eq[1] === q[1]) {
//                     visited[i] = 1;
//                     f([eq[0], q[0]], val * values[i]);
//                 }

//                 if (visited[i] && q[0] === q[1]) {
//                     re = 1;
//                     return;
//                 }
//             }
//         }
//     }
    
//     console.log(result);
//     return result;
// };