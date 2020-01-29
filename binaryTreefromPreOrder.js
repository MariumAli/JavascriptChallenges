/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var bstFromPreorder = function(preorder) {
    if (!preorder.length) return null
    
    const [root, ...rest] = preorder;
    console.log('root ' + root);
    console.log('rest ' + rest);
    const rootNode = new TreeNode(root)
    rootNode.left = bstFromPreorder(rest.filter(n => n < root));
    console.log('rootNode.left ' + rootNode.left);
    console.log(rootNode.left);
    rootNode.right = bstFromPreorder(rest.filter(n => n > root));
    console.log('rootNode.right ' + rootNode.right);
    console.log(rootNode.right);
    
    return rootNode;
};

const test = console.log(bstFromPreorder([8,5,1,7,10,12]))