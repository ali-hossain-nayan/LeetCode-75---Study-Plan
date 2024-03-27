/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const getLeafRecursive = (node, sequence)=> {
       if (!node) return;
       if (!node.left && !node.right) sequence.push(node.val);
       getLeafRecursive(node.left, sequence);
       getLeafRecursive(node.right, sequence);
   }

   let  leafSequence1 = [];
   let leafSequence2 = [];

   getLeafRecursive(root1, leafSequence1);
   getLeafRecursive(root2, leafSequence2);

   return leafSequence1.join(',') === leafSequence2.join(',');
};