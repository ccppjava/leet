/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    function f(n1, n2) {
        if (n1.length > n2.length) {
            n1, n2 = n2, n1;            
        }
        console.log('>>> ', n1, n2);
        // TODO: handles length less or equals 3 situation

        let m1 = Math.floor(n1.length / 2);
        if (n1[m1] > n2[m1]) {
            if (n1[m1 -1] < n2[m1]) {
                return f(n1.slice(m1), n2.slice(0, - m1));
            } else if (m1 > 1) {
                // need to preserve n1[m1 - 1] in case it is useful
                return f(n1.slice(m1 - 1), n2.slice(0, - (m1 - 1)));
            }
        }

        if (n1[m1] < n2[n2.length - 1 - m1]) {
            if (n1[m1 + 1] > n2[n2.length - 1 - m1]) {
                return find(n1.slice(m1), n2.slice(0, - m1));
            } else if (m1 + 1 < n1.length - 1) {
                // need to preserve n1[m1 + 1]
                return f(n1.slice(m1 + 1), n2.slice(0, - (m1 - 1)));
            }
        }

        // n1.length === 3 which all go inside n2
        if (n1.length === 3) {
            let m2 = Math.floor(n2.length / 2);
            if (n1[m1 - 1] >= n2[m2]) { // all three element lays at right of m2
                if (n2)
            }
        }
        debugger;
    }

    return f(nums1, nums2);

    function findNoneIntersect(n1, n2) {
        let midIndex1 = 0, midIndex2 = 0;
        if ((n1.length + n2.length) % 2 !== 0) {
            midIndex1 = (n1.length + n2.length - 1) / 2;    
        } else {
            midIndex2 = (n1.length + n2.length) / 2;    
            midIndex1 = midIndex2 - 1;
        }

        if (n1.length === 0 || n1[n1.length - 1] <= n2[0]) {
            // everything in n1 is smaller than n2, simply join and return median
            if (midIndex2 > 0) {
                // looking for two number
                let m1 = n1[midIndex1] || n2[midIndex1 - n1.length];
                let m2 = n1[midIndex2] || n2[midIndex2 - n1.length];
                return (m1 + m2) / 2;
            } else {
                return n1[midIndex1] || n2[midIndex1 - n1.length];
            }
        } else if (n1[0] >= n2[n2.length - 1]) {
            // reverse two array order and it will fell to above logic
            return findNoneIntersect(n2, n1);
        } else {
            return NaN;
        }
    }
    
    function find(n1, n2) {
        // get out of the recursion
        if (n1.length <= 2 && n2.length <= 2) {
            n2 = n1.concat(n2).sort((a, b) => a - b);
            return findNoneIntersect([], n2)
        }
        
        if (n1.length > n2.length) {
            // make sure n1's length always less than n2's
            return find(n2, n1);
        }

        // if (n2.length === 2 && n1.length === 2) {
        //     // only slice it further if n2 larger than 2 element
        //     // in this case n1 & n2 both have 2 elements, and intersect each other
        //     if (n1[0] >= n2[0]) {
        //         if (n1[1] <= n2[1]) {
        //             return (n1[0] + n1[1]) / 2;
        //         }
        //         return (n1[0] + n2[1]) / 2;
        //     } else {
        //         if (n2[1] <= n1[1]) {
        //             return (n2[0] + n2[1]) / 2;
        //         }
        //         return (n1[1] + n2[0]) / 2;
        //     }
        // }

        let r = findNoneIntersect(n1, n2);
        if (!isNaN(r)) {
            return r;
        }

        // console.log(JSON.stringify(n1));
        // console.log(JSON.stringify(n2));
        // if together is odd number, then a single number is of significance
        let single = (n1.length + n2.length) % 2 === 1;
        let m1 = Math.floor(n1.length / 2);

        if (n1.length === 1) {
            // TODO: should use a binary search here
            return find(n1, n2.slice(1, -1));
        } else if (n1.length === 2) {
            // all n1's value should be preserved
            // TODO: should binary search n2, and further remove element
            return find(n1, n2.slice(1, -1));
        }
        
        // key is the n1 length should be larger than 2
        if (n1.length > 2) {
            if (n1[m1] < n2[n2.length - 1 - m1]) {
                return find(n1.slice(m1), n2.slice(0, - m1));
            }

            if (n1[m1] > n2[m1]) {
                return find(n1.slice(0, - m1), n2.slice(m1));
            }

            // which includes the situation of equality (of above)
            return find(n1, n2.slice(m1, -m1));
        } else {
            // need to keep two significant numbers of each array
            m1 = m1 - 1;    // also preserve the left element
            let m2 = m1 + 1;    // back to the original 'm1' value

            // if not the first element
            if (m1 > 0 && n1[m1] < n2[n2.length - 1 - m1]) {
                return find(n1.slice(m1), n2.slice(0, - m1));
            } 

            // if not the last element
            if (m2 < n1.length - 1 && n1[m2] > n2[m2]) {
                return find(n1.slice(0, - m2), n2.slice(m2));
            }

            // which includes the situation of equality (of above)
            return find(n1, n2.slice(m1, -m1));
        }
    }

    // return find(nums1, nums2);
};


console.log(findMedianSortedArrays([4,5,6],[1,2,3,7,8]), " = 4.5");
console.log(findMedianSortedArrays([3,4,5,6,7],[1,2,3,7,8]), " = 4.5");

console.log(findMedianSortedArrays([4,5],[1,2,3,6,7]), " = 4.0");
console.log(findMedianSortedArrays([1,2,4],[3,5,6]), " = 3.5");

console.log(findMedianSortedArrays([3,4],[1,2,5,6]), " = 3.5");
console.log(findMedianSortedArrays([1,4],[2,3]), " = 2.5");
console.log(findMedianSortedArrays([1,2],[1,2,3]), " = 2");
console.log(findMedianSortedArrays([1,3],[2,4]), " = 2.5");
console.log(findMedianSortedArrays([2,4],[1,3]), " = 2.5");
console.log(findMedianSortedArrays([2],[1,3,4]), " = 2.5");

console.log(findMedianSortedArrays([1,3,5,7,9],[2,4,6,8,10]), " = 5.5");
console.log(findMedianSortedArrays([1,2,3],[4]), " = 2.5");
console.log(findMedianSortedArrays([1,2,3],[3,5,6]), " = 3");
console.log(findMedianSortedArrays([1,2,3],[4,5,6,7]), " = 4");
console.log(findMedianSortedArrays([1,2,3,4,5],[4,5,6,7]), " = 4");
console.log(findMedianSortedArrays([4,5,6,7],[1,2,3,4,5]), " = 4");