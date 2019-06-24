/*function ListNode(val) {
  this.val = val;
  this.next = null;
}*/
class ListNode {
  constructor(value = null, pointer = null){
      this.val = value;
      this.next = pointer;
  }
}

var addTwoNumbers = function(l1, l2) {
  function traverseNodes(a, b, carry = 0){
    let new_val;
    if(a == null && b == null){
      if(carry){
        return new ListNode(carry);
      }
      return;
    }
    function sumvals(a, b, carry){
      val_a = a ? a.val : 0;
      val_b = b ? b.val : 0;
      let ret = val_a+val_b+carry; 
      carry = Math.floor(ret/10);
      if(carry > 0){
        ret = ret % 10;
      }
      return [ret, carry];
    }
    [new_val, carry] = sumvals(a, b, carry);
    let r = new ListNode(new_val);
    
    if(a == null){
      r.next = traverseNodes(null, b.next, carry);
      return r;
    }
    else if(b == null){
      r.next = traverseNodes(a.next, null, carry);
      return r;
    }
    else{
      r.next=traverseNodes(a.next, b.next, carry);
      return r;
    }
  }
  let summed = traverseNodes(l1, l2);
  return summed;
};

module.exports.ListNode = ListNode;
module.exports.addTwoNumbers = addTwoNumbers;