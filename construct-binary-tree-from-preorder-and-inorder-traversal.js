/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var nodesIndexes = new Map();
    var nodes = [];
    for (var i = 0; i < preorder.length; i++) {
        nodes.push(new TreeNode(preorder[i]));
        nodesIndexes.set(preorder[i], i);
    }

    var orders = new Map();
    for (var i = 0; i < inorder.length; i++) {
        var index = nodesIndexes.get(inorder[i]);
        orders.set(nodes[index], i);
    }

    var previous = nodes[0];
    for (var i = 1; i < nodes.length; i++) {
        var current = nodes[i];
        if (orders.get(current) > orders.get(previous)) {
            var index = nodesIndexes.get(previous.val);
            var pre = nodes[index];
            var target = index - 1;

            while(target >= 0) {
                var parent = nodes[target];
                // console.log(">>>", previous.val, orders.get(previous), current.val, 
                //     orders.get(current),parent.val, index, target);

                // current node should be on the right of the parent node
                if (orders.get(parent) < orders.get(current)) {
                    // already on the right branch, check and go up
                    // if (parent.right && parent.right.val === nodes[target+1].val) {
                    // } else 
                    // if (parent.left && parent.left.val === nodes[target+1].val) {
                    if (parent.right && parent.right.val === pre.val) {
                        pre = parent;
                    } else if (parent.left && parent.left.val === pre.val) {
                        pre = parent;
                        index = target;
                    }
                    target--;
                } else {
                    break;
                }
            }
            
            console.log("===>", index, nodes[index].val, current.val);
            nodes[index].right = current;
        } else {
            previous.left = current;
        }

        previous = current;
    }

    // console.log(nodes);
    return nodes.length ? nodes[0] : null;
};

buildTree([3,9,20,15,7], [9,3,15,20,7]);

// buildTree([1,2], [1,2]);

// buildTree([1,2,3], [3,2,1]);

// buildTree([1,2,3], [1,2,3]);    // [1,null,2,null,3]

// buildTree([1,4,2,3],[1,2,3,4]);

// buildTree([3,1,2,4], [1,2,3,4]);    // [3,1,4,null,2]

// wrong: [7,-10,null,-4,3,null,null,null,-1,null,2,-8,null,11]
buildTree([7,-10,-4,3,-1,2,-8,11], [-4,-10,3,-1,7,11,-8,2]) // [7,-10,2,-4,3,-8,null,null,null,null,-1,11]