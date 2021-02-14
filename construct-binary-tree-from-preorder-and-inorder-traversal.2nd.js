/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const map = new Map();
    const len = inorder.length;
    let preIndex = 0;
    
    for (var i = 0; i < len; i++) {
        map.set(inorder[i], i);
    }
    
    return build(0, len);
    
    function build(left, right) {
        
        if (left === right) {   // no more element to construct (sub)tree
            return null;
        }
        
        // console.log(left, right, preIndex, preorder[preIndex]);
        
        // use pre_index as a root
        let rootVal = preorder[preIndex];
        let root = new TreeNode(rootVal);
        
        // root value split tree to left and right subtrees
        let index = map.get(rootVal);
        
        preIndex++;
        
        root.left = build(left, index);
        root.right = build(index + 1, right);
        return root;
    }
};