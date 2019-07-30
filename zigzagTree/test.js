function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const zigzag = require("./zigzag");

test('should return a zig zag', () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.right= new TreeNode(7);
  root.right.left= new TreeNode(15);
  expect(zigzag(root)).toEqual([[3],[20,9],[15,7]]);
});