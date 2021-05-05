import { LinkedList } from './linked_list.js'
const linkedList = new LinkedList()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')
console.log(linkedList);
console.log(linkedList.length);

console.log(linkedList.head);

// 反转链表
function reverseList(head) {
  if (!head) {
    return null
  }
  let pre = null
  let cur = head
  while (cur) {
    let next = cur.next;
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
// // 递归实现
// function reverseList(head) {
//   function reverse(pre, cur) {
//     if (!cur) {
//       return pre
//     }
//     let next = cur.next;
//     cur.next = pre;
//     return reverse(cur, next)
//   }
//   return reverse(null, head)
// }

console.log(reverseList(linkedList.head));
