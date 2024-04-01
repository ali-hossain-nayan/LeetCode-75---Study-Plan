/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) {
        return 0;
    }
    function ReadSum(node, sum) {
        if (!node) {
            return 0
        }
        sum = sum + node.val;
        let count = 0
        if (sum === targetSum) {
            count++;
        } else {
            count = 0;
        }

        return count + ReadSum(node.left, sum) + ReadSum(node.right, sum);
    }

    return ReadSum(root, 0) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
}
