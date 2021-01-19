
 // Definition for a Node.
 function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 }




/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return head;
    }
    
    var map = new Map();
    var existing = head;
    var result = new Node();
    result.val = head.val;
    result.random = head.random;
    var copy = result;
    
    while (existing) {
        map.set(existing, copy);

        existing = existing.next;
        if (existing) {
            var node = new Node();
            node.val = existing.val;
            node.random = existing.random;
            copy.next = node;
            copy = copy.next;
        }
    }

    copy = result;
    while (copy) {
        copy.random = map.get(copy.random);
        copy = copy.next;
    }

    return result;
};