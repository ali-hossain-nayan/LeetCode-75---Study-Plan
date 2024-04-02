/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let maxSum = -Infinity;
    let node = head;
    let count = 0;
    const values = [];

    while (node) {
        values.push(node.val);
        node = node.next;
        count++;
    }

    for (let i = 0; i < count / 2; i++) {
        const twinSum = values[i] + values[count - 1 - i];
        maxSum = Math.max(maxSum, twinSum);
    }

    return maxSum;
};