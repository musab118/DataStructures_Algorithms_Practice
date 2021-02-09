//Stacks
class Node {
    constructor(value) {
      (this.head = value), (this.next = null);
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
    peek() {
      console.log(this.top);
      console.log(this.length);
    }
  
    push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      console.log(this);
    }
  
    pop() {
      if (!this.top) {
        return null;
      } 
      if (this.top === this.bottom) {
        this.bottom = null;
      } 
        const nextPointer = this.top.next;
        this.top = nextPointer;
        this.length--;
      console.log(this);
    }
  
    isEmpty() {
      if (this.length === 0) {
        return "The Stack is empty!";
      } else {
        return "The Stack is not empty";
      }
    }
  }
  
  const myStack = new Stack();
  
  myStack.push("google");
  myStack.push("youtube");
  myStack.push("udemy");
  myStack.pop();
  myStack.pop();
  myStack.pop();
  
  console.log(myStack.isEmpty());
