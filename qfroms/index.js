// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
// Queue - FIFO
// Stack - FILO

const Stack = require('./stack');

class Queue {
    constructor(){
        this.stacka = new Stack();
        this.stackb = new Stack();
    }
    add(record){
        this.stacka.push(record);
    }
    remove(){
        while(this.stacka.peek()){
            this.stackb.push(this.stacka.pop());
        }
        let temp = this.stackb.pop();
        while(this.stackb.peek()){
            this.stacka.push(this.stackb.pop());
        }
        return temp;

    }
    peek(){
        while(this.stacka.peek()){
            this.stackb.push(this.stacka.pop());
        }
        let temp = this.stackb.peek();
        while(this.stackb.peek()){
            this.stacka.push(this.stackb.pop());
        }
        return temp;
    }

    
}

module.exports = Queue;
