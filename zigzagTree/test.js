function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const zigzag = require("./zigzag");
describe('Zig Zag BST', () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.right= new TreeNode(7);
  root.right.left= new TreeNode(15);
  test('should return a zig zag recursively', () => {
    expect(zigzag.recursive(root)).toEqual([[3],[20,9],[15,7]]);
  });
  test('should return a zig zag iteratively', () => {
    expect(zigzag.iterative(root)).toEqual([[3],[20,9],[15,7]]);    
  });
});
describe('Zig zag BST', ()=>{
  let root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.left.left = new TreeNode(7);
  root.left.right = new TreeNode(15);
  root.right.left = new TreeNode(8);
  root.right.right = new TreeNode(9);
  test('output zig zag order', () => {
    expect(zigzag.recursive(root)).toEqual([[3], [20, 9], [7, 15, 8, 9]]);
  });
});
