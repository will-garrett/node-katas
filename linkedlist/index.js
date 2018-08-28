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
        while(observer){
            count++;
            observer = observer.next;
        }
        return count;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        let observer = this.head;
        while(observer.next != null){
            observer = observer.next;
        }
        return observer;
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        this.head = this.head.next;
    }
    removeLast(){
        let observer = this.head;

        if(observer == null || observer.next == null){
            this.head = null;
            return;
        }
        while(observer.next.next != null){
            observer = observer.next;
        }
        observer.next = null;
    }
    insertLast(value){
        if(this.head == null){
            this.head = new Node(value);
            return;
        }
        let observer = this.getLast();
        observer.next = new Node(value);
    }
    getAt(number){
        let observer = this.head;
        if(number > this.size()){
            return null;
        }
        for(let i = 0; i < number; i++){
            observer = observer.next;
        }
        return observer;
    }
    removeAt(number){
        if(this.head == null){
            return;
        }
        if(number == 0){
            this.head = this.head.next;
            return;
        }
        let past = null;
        let observer = this.head;
        let count = 0;
        while(observer){
            if(count == number){
                past.next = observer.next;
                return;
            }
            past = observer;
            observer = observer.next;
            count++;
        }
        
    }
    insertAt(data, position){
        if(this.head == null){
            this.head = new Node(data);
            return;
        }
        if(position == 0){
            this.insertFirst(data);
            return;
        }
        let previous = this.getAt(position - 1) || this.getLast();
        let observer = this.getAt(position);
        previous.next = new Node(data, observer);

    }
    forEach(func){
        let observer = this.head;
        let count = 0;
        while(observer){
            func(observer, count);
            observer = observer.next;
            count++;
        }
    }
    *[Symbol.iterator](){
        let observer  = this.head;
        while(observer){
            yield observer;
            observer = observer.next;
        }
    }
}

module.exports = { Node, LinkedList };
