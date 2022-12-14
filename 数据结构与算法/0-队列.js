/**
 * 入队 出队  只能先进先出
 * 数组Q[m + 1] m为队列中有多少个元素 +1是因为头指针从对头前一个元素开始 且最开始的下标为0
 * head 头指针 指向对头前一个元素
 * tail 尾指针 指向队尾元素
 * 队列个数 = tail - head
 */


/**
 * 溢出
 * 假溢出
 */

// 2 % 8 = 0 ... 2 = 2
// 8 % 0 = 8
/**
 * 循环队列
 * 队空 tail == head  队列中会空出一个位置留给头指针
 * 入队 tail == (tail + 1) % n  n为一共有多少个位置
 * 出队 head = (head + 1) % n
 * 队满 (tail + 1) % n == head
 * 元素个数 (tail - head + n) % n
 */

// mod是%取余的意思