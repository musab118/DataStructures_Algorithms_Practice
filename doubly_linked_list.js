//doubly Linked list implementation
class DLList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null,
      };
      this.head.next = this.tail;
      this.tail = this.head;
  
      this.length = 1;
    }
  
    append(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null,
      };
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null,
      };
  
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(array);
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
  
      return currentNode;
    }
  
    insert(index, value) {
      if (index === 0) {
        this.prepend(value);
      } else if (index >= this.length) {
        this.append(value);
      }
      const newNode = {
        value: value,
        next: null,
        prev: null,
      };
  
      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.next = follower;
      newNode.prev = leader;
      follower.prev = newNode;
      console.log(this)
      this.length++;
    }
  }
  
  
  const myDoubleList = new DLList(10);
  myDoubleList.append(4);
  myDoubleList.prepend(1);
  myDoubleList.insert(1, 45);
  myDoubleList.printList();