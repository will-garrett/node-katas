var sumNodes = require("./sum_nodes");
/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
test('should return ', () => {
  let a = new sumNodes.ListNode(2);
  a.next = new sumNodes.ListNode(4);
  a.next.next = new sumNodes.ListNode(3);

  let b = new sumNodes.ListNode(5);
  b.next = new sumNodes.ListNode(6);
  b.next.next = new sumNodes.ListNode(4);

  let result = sumNodes.addTwoNumbers(a, b);
  
  expect(result.val).toEqual(7);
  expect(result.next.val).toEqual(0);
  expect(result.next.next.val).toEqual(8);

});

test('should return uneven sums', () => {
  let a = new sumNodes.ListNode(2);
  a.next = new sumNodes.ListNode(4);
  a.next.next = new sumNodes.ListNode(3);

  let b = new sumNodes.ListNode(0);
  b.next = new sumNodes.ListNode(2);
  
  let result = sumNodes.addTwoNumbers(a,b);

  expect(result.val).toEqual(2);
  expect(result.next.val).toEqual(6);
  expect(result.next.next.val).toEqual(3);
});
test('should return 10 from 5 + 5', () => {
  let a = new sumNodes.ListNode(5);
  let b = new sumNodes.ListNode(5);

  let result = sumNodes.addTwoNumbers(a, b);
  expect(result.val).toEqual(0);
  expect(result.next.val).toEqual(1);
});