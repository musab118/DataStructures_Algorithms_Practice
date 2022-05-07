class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (this.length === 0) {
      console.log("No Items in Queue!");
    } else {
      console.log(`First person in the queue is: ${this.first.value}`);
    }
    console.log("Items in Queue: " +  this.length);
  }

  enqueue(value) {
    const newQueue = new Node(value);
    if (this.length === 0) {
      this.first = newQueue;
      this.last = newQueue;
    }
    this.last.next = newQueue;
    this.last = newQueue;
    this.length++;
  }

  dequeue() {
    if (this.length > 0) {
      const firstNode = this.first;
      const nextNode = firstNode.next;
      this.first = nextNode;
      this.length--;
    } else {
    }
  }
}

const myQueue = new Queue();
myQueue.enqueue("Musab");
myQueue.enqueue("Mohammed");
myQueue.enqueue("Mustafa");
myQueue.enqueue("Mujtaba")
myQueue.dequeue()

myQueue.peek();

// console.log(myQueue)
