/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var node = head;
    var i = 1;
    var before = null;
    var after = null;
    var begin = null;
    var pre = null;
    var current = null;
    
    while(node) {
        if (i === m - 1) {
            before = node;    
        }
        
        if (i === n + 1) {
            after = node;
        }
        
        if (i >= m && i <= n) {
            if (!begin) {
                begin = node;
            }
            
            current = node;
            node = node.next;
            
            current.next = pre;
            pre = current;
        } else {
            node = node.next;
        }
        i++;
        
        if (i > n + 1) {
            break;
        }
        
        // console.log(head, current, begin);
    }
    
    if (after) {
        begin.next = after;
    }
    
    if (before) {
        before.next = current;
        return head;
    } else {
        return current;
    }
};