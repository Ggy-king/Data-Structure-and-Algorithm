// // 给你一个链表的头节点 head ，判断链表中是否有环。

// // 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

// // 如果链表中存在环 ，则返回 true 。 否则，返回 false 。

// 示例 1：



// 输入：head = [3, 2, 0, -4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。
// 示例 2：



// 输入：head = [1, 2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。
// 示例 3：



// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。


// 提示：

// 链表中节点的数目范围是[0, 104]
//     - 105 <= Node.val <= 105
// pos 为 - 1 或者链表中的一个 有效索引 。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 这个几把题考环有点无语 尤其是js

    // 1 标记所走过的每一个节点 如果再次遇上则是环
    // while(head) {
    //     if(head.tag){
    //         return true
    //     }
    //     head.tag = true
    //     head = head.next
    // }
    // return false

    // 2 head无法调用length 简单的来说这不是数组 也正常 不难推敲节点存储是对象形式
    // 即键值相对 简单判断若有某键指向同一值则为环
    // try {
    //     JSON.stringify(head)  //将对象转换为字符串 直接判断真假 有错为环
    // } catch {
    //     return true
    // }
    // return false

    // 3 偷鸡摸狗解法 在规定长度内超了就是有环
    let i = 0, size = 100000
    let node = head
    while (++i <= size) {
        if (!node) return false
        node = node.next
    }
    return true;


    // 4 正常解法 设一个慢节点和一个块节点 他们总会相遇
    // if(head === null) return false
    // let show = head
    // let fast = head.next
    // while(fast && fast.next) {
    //     if(show.next === fast.next.next) return true
    //     show = show.next
    //     fast = fast.next.next
    // }
    // return false


};