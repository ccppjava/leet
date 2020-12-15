/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    console.log(">>>", root, target, K);
    var chain = []
    dfs(root, target, chain);
    console.log(chain);
    
    var result = [];
    for (var i = 0; i < chain.length; i++) {
        var node = chain[i];
        var avoid = i > 0 ? chain[i - 1] : chain[i];
        bfsLevelNoDuplicate(node, K - i, avoid, result);
    }
    console.log("---", result);
    return result;
};

function dfs(node, target, result) {
    if (!node) {
        return;
    }
    
    if (node.val === target.val) {
        result.push(node);
        return 1;
    }
    
    if (dfs(node.left, target, result)) {
        result.push(node);
        return 1;
    }
    
    if (dfs(node.right, target, result)) {
        result.push(node);
        return 1;
    }
}

function bfsLevelNoDuplicate(node, level, avoid, result) {
    var queue = [node];
    node.level = 0;
    
    while (queue.length) {
        node = queue.shift();
        if (node) {
            if (node.level === level) {
                result.push(node.val);
            } else {
                if (node.left && node.left.val !== avoid.val) {
                    node.left.level = node.level + 1;
                    queue.push(node.left);
                }
                if (node.right && node.right.val !== avoid.val) {
                    node.right.level = node.level + 1;
                    queue.push(node.right);
                }
            }   
        }
    }
}
