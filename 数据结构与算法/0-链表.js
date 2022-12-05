// 链表 js实现

// 链表是可以解决内存中不连续的空间却还想实现连续的操作的操作
// 链表可以存储不连续空间的值
/**
 * 1 数组是有序的线性的数据结构 是连续的
 * 2 数组的开辟空间也为连续的内存
 * 3 那么不连续的空间内存不能实现连续的数据操作吗 链表引出来了
 */


// 1 单向链表: 线性的数据结构 但不是连续的
/**
 * 1 next指针指向下一个节点
 * 2 最后一个指针指向none
 * 3 head为头指针 指向第一个元素
 */

// 2 双向链表: 在单向链表的基础上 各元素之间反向加一条pre指针 除了首尾
/**
 * 1 pre指针指向前一个元素
 * 
 */

// 3 单项循环链表: 在单向链表的基础上 将最后一个指针指向第一个元素

// 4 双项循环链表: 在双向链表的基础上 将最后一个指针指向第一个元素 再将第一个元素加一指针指向最后一个元素 形成双闭环

// 5 环形链表: 只要可以形成闭环的元素间就是环形链表


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 面试的时候不会为难前端人员 一般实现一个单向链表就可以了

// 1 单向链表
// 创建元素
class Node {
    constructor(element) {
        // 创建data数据和指针next
        this.element = element
        this.next = null
    }
}


// 创建链表
class LinkedList {
    constructor() {
        // 创建链表长度size和节点
        this.head = null
        this.size = 0
    }


    // 添加元素
    append(element) {
        // 创建一个元素
        let node = new Node(element)

        // 判断该链表是否为空
        if (this.head == null) {
            this.head = node
        } else {
            // 获取最后一个元素的节点
            let current = this.getNode(this.size - 1)
            current.next = node
        }

        this.size++
    }


    // 在指定位置追加
    appendAt(position, element) {
        // 控制范围
        if (position < 0 || position > this.size) {
            throw new Error('超出界限')
        }

        // 创建元素
        let node = new Node(element)

        // 判断插入的位置是否为第一个元素
        if (position === 0) {
            node.next = this.head
            this.head = node
        } else {
            // 得到其前一个元素(节点)
            let pre = this.getNode(position - 1)
            // 先保存下一个节点 防止丢失 再连接我的节点
            node.next = pre.next
            pre.next = node
        }

        this.size++
    }


    // 删除指定位置元素
    removeAt(position) {
        // 控制范围
        if (position < 0 || position >= this.size) {
            throw new Error('超出界限')
        }

        // 获取当前头节点  记住这是当前的 头节点
        let current = this.head

        // 判断删除的位置是否为头或尾
        if (position === 0) {
            this.head = current.next
        } else {
            // 获取前一个节点
            let pre = this.getNode(position - 1)
            current = pre.next
            pre.next = current.next
        }

        this.size--
    }


    // 查找指定元素的索引
    indexOf(element) {
        // 获取当前头节点
        let current = this.head

        for (let i = 0; i < this.size; i++) {
            if (current.element === element) {
                return i
            }
            // 每次找完 到下一个节点
            current = current.next
        }
        // 找不到
        return -1
    }


    //得到某下标的节点
    getNode(index) {
        // 控制范围
        if (index < 0 || index >= this.size) {
            throw new Error('超出界限')
        }
        // 得到该下标的指针节点
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }
}


// 演示
let list = new LinkedList()
list.append(1)
list.append(2)
list.appendAt(2, 3)
list.appendAt(2, 1)
list.append(4)
list.removeAt(1)
console.log(list.indexOf(1))
console.log(list.indexOf(2))
console.log(list.indexOf(3))


console.dir(list, {
    depth: 100
})