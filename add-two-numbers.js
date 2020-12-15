/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3, curr, toNext = 0;
    for(;;) {
        if (!l1 && !l2) {
            if(toNext) {
                curr.next = new ListNode(toNext);
            }

            break;
        }

        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let v = v1 + v2 + toNext;
        let node = new ListNode(v % 10);
        toNext = v >= 10 ? 1 : 0;

        if (!l3) {
            // first ever node
            l3 = node;
            curr = node;
        } else {
            curr.next = node;
            curr = node;
        }

        // any of the list might have finished already
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }

    return l3;
};

// testing
function ListNode(val) {
    this.val = val;
    this.next = null;
}

a1 = new ListNode(2);
a1.next = new ListNode(4);
a1.next.next = new ListNode(3);

b1 = new ListNode(5);
b1.next = new ListNode(6);
b1.next.next = new ListNode(4);

let result = addTwoNumbers(a1, b1);
console.log(JSON.stringify(result));

a2 = new ListNode(1);
a2.next = new ListNode(8);

b2 = new ListNode(0);

result = addTwoNumbers(a2, b2);
console.log(JSON.stringify(result));
