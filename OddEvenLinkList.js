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
var oddEvenList = function (head) {
    if (!head || !head.next) return head;

    let oddHead = new ListNode(null);
    let evenHead = new ListNode(null);
    let tempOdd = oddHead;
    let tempEven = evenHead;
    let isOdd = false;

    while (head) {
        if (!isOdd) {
            tempOdd.next = head;
            tempOdd = tempOdd.next;
        } else {
            tempEven.next = head;
            tempEven = tempEven.next;
        }
        isOdd = !isOdd;
        head = head.next;
    }


    tempOdd.next = evenHead.next;

    tempEven.next = null;

    return oddHead.next;
};