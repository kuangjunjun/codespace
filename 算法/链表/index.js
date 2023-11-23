// let arr = [1, 2, 3, 4, 5, 6, 7, 8]  // 有序列表线性结构

// let res = {
//     val: 1,   // 数据域
//     next: {   // 指针域
//         val: 2,
//         next: {}
//     }
// }

// // res.next.next

function ListNode(val) {
    this.val = val
    this.next = null
}

const node = new ListNode(1)
node.next = new ListNode(2)

const node3 = new ListNoede(3)
node3.next = node1.next
node1.next = node3
node1.next = node3.next