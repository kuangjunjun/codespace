/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    temp = dummy
    while(temp.next && temp.next.next){
        let pre = temp.next, cur = temp.next.next
        pre.next = cur.next
        cur.next = pre
        temp.next = cur
        temp = pre
    }
    return dummy.next
};