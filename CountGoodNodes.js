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
var goodNodes = function(root) {
    function CountGoodNodes(node, maxVal) {
      if (!node) return 0;
      
      let count = node.val >= maxVal ? 1 : 0;
      
      maxVal = Math.max(maxVal, node.val);

      
      return count + CountGoodNodes(node.left, maxVal) + CountGoodNodes(node.right, maxVal);
  }
  
  return CountGoodNodes(root, Number.NEGATIVE_INFINITY);
};