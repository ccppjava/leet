https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// NOT Working (only works for balanced binary tree)

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    console.log(">>>", root, target, K);
    var queue = [root];
    var values = [];
    var index = -1;
    
    while (queue.length) {
        node = queue.shift();
        if (node) {
            queue.push(node.left);
            queue.push(node.right);
            if (node.val === target.val) {
                index = values.length;
            }
            values.push(node.val);
        } else {
            values.push(null);
        }
    }
    console.log("==> ", values)
    
    var result = [];
    var total = values.length;
    var index = index + 1;   // use 1 based index
    downDistanceK(index, K, values, total, result);    

    var processedIndex = index;
    var up = 1;
    index = Math.floor(index / 2);
    while (index > 0) {
        var notProcessedIndex = index * 2 === processedIndex ? index * 2 + 1 : index * 2;
        console.log(index, processedIndex);
        downDistanceK(notProcessedIndex, K - up - 1, values, total, result);
     
        processIndex = index;
        up++;
        index = Math.floor(index / 2);
    }

    return result;
};

function downDistanceK(index, K, root, total, result) {
    var startIndex = (index << K) - 1;
    var endIndex = startIndex + (1 << K);
    console.log(index, K, total, startIndex, endIndex);
    for (var i = startIndex; i < total && i < endIndex; i++) {
        if (root[i] !== undefined && root[i] !== null) {
            result.push(root[i]);
        }
    }
}
