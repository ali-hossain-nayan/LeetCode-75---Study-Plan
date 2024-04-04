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
 * @return {number}
 */
var longestZigZag = function (root) {
    let maxZigZag = 0
    function dfs(node, LeftLength, RightLength) {
        if (!node) return

        maxZigZag = Math.max(maxZigZag, LeftLength, RightLength)

        dfs(node.left, RightLength + 1, 0)
        dfs(node.right, 0, LeftLength + 1)
    }

    dfs(root, 0, 0)

    return maxZigZag;
};