class Stack {
    constructor(){
        this.data = [];
    }
    push(item){
        this.data.push(item);
    }
    pop(item){
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length -1];
    }
    empty(){
        return this.data.length === 0;
    }
}

module.exports = Stack;