// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(value = null, pointer = null){
        this.data = value;
        this.next = pointer;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(value){
        this.head = new Node(value, this.head);
    }
    size(){
        let count = 0;
        let observer = this.head;
        if(observer == null){
            return 0;
        }
        else{
            do{
                count++;
                observer=observer.next;
            }while(observer.next != null)
            count++;
        }
        return count;
    }

}

module.exports = { Node, LinkedList };
