// var removeNthFromEnd = function (head, n) {
//     const dummy = new ListNode()
//     dummy.next = head

//     let cur = dummy
//     let len = 0

//     // len - n + 1 == 倒数n
//     while (cur.next) {
//         len++
//         cur = cur.next
//     }


//     let pre = dummy
//     for (let i = 0; i < len - n; i++){
//         pre = pre.next
//     }

//     if (pre.next) {
//         pre.next = pre.next.next
//     }

//     return dummy.next

// }

var removeNthFromEnd = function(head, n){
    // len      m = len - n + 1     pre = m - 1
    const dummy = new ListNode()
    dummy.next = head

    let fast = dummy
    let slow = dummy

    // 快指针先走n步
    while (n != 0) {
        fast = fast.next
        n--
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return dummy.next
}