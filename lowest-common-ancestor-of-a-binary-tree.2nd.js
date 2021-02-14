/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    var parent = null;
    var count = 0;
    var set = new Set();

    function search(node, found) {
        if (parent) {
            return;
        }
        
        // console.log(">  ", node.val, count, found, set);
        if (node.val === p.val || node.val === q.val) {
            set.add(node.val);
            found = true;
            count += 1;
        }
        
        if (count === 2) {
            return found;
        }

        if (node.left) {
            var result = search(node.left, false);
            if (result) {
                found = true;
                if (count === 1) {
                   set.add(node.val); 
                } else if (count === 2) {
                    if (set.has(node.val)) {
                        parent = node;
                        return;
                    }
                }
            }
        }

        if (node.right) {
            var result = search(node.right, false);
            
            if (result) {
                found = true;
                if (count === 1) {
                   set.add(node.val); 
                } else if (count === 2) {
                    if (set.has(node.val)) {
                        parent = node;
                        return;
                    }
                }
            }
        }
        
        // console.log(">> ", node.val, count, found, set);
        return found;
    }
    
    search(root, false);
    
    // console.log(result);
    return parent;
};

