// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

 

// 示例 1：


// 输入：l1 = [1, 2, 4], l2 = [1, 3, 4]
// 输出：[1, 1, 2, 3, 4, 4]
// 示例 2：

// 输入：l1 = [], l2 = []
// 输出：[]
// 示例 3：

// 输入：l1 = [], l2 = [0]
// 输出：[0]


// 提示：

// 两个链表的节点数目范围是[0, 50]
//     - 100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    //递归终止 分隔到不能分割 也就是两个链表有一个的nxet不存在了 那就没法分割问题了 只能返回
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val < list2.val) {//当前节点谁小，就让这个较小的节点的next和另一个链表继续递归合并
        list1.next = mergeTwoLists(list1.next, list2);//分隔成合并list1.next, list2的子问题
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}