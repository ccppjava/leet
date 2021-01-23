/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var result = [];
    
    function find(node, level) {
        if (node) {
            if (result.length <= level) {
                result.push(node.val);  
            }
            
            if (node.right) {
                find(node.right, level + 1);
            }
            
            if (node.left) {
                find(node.left, level + 1);
            }
        }
    }
    
    find(root, 0);
    
    return result;
};