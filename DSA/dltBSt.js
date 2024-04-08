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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
     if (!root) return null; // Base case: if root is null, return null
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key); // Search in the left subtree
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key); // Search in the right subtree
    } else {
        // Case 1: No children or only one child
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        
        // Case 2: Node with two children
        // Find the inorder successor (the smallest node in the right subtree)
        let successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }
        // Replace the value of the root with the value of the inorder successor
        root.val = successor.val;
        // Delete the inorder successor from the right subtree
        root.right = deleteNode(root.right, successor.val);
    }
    
    return root;
};