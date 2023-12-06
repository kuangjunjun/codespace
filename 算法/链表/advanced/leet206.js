// var reverseList = function (head) {
//     const dummy = new ListNode()
//     let cur = head
//     let now = head
//     let nextNode = null
//     while (!cur)  {
//         dummy.next = cur
//         cur.next = nextNode
//         nextNode = cur
//         cur = cur.next
//     }
//     return dummy.next
// }

var reverseList = function (head) {
    let pre = null
    let cur = head
    while (cur) {
        let nextNode = cur.next
        cur.next = pre
        pre = cur
        cur = nextNode
    }
    return pre
}