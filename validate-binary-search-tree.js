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
 * @return {boolean}
 */
var isValidBST = function(root) {
    var valid = true;
    
    function validate(node, min, max) {
        
        if (!node || !valid) { return; }
        
        if (node.val >= max || node.val <= min) {
            valid = false;
            return;
        }
        
        validate(node.left, min, node.val);
        validate(node.right, node.val, max);
    }
    
    validate(root, -Infinity, Infinity);
    return valid;
};