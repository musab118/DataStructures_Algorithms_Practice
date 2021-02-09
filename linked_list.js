//Basic Linked list exxample

class LinkedList {


  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const firstNode = {
      value: value,
      next: null,
    };
    firstNode.next = this.head;
    this.head = firstNode;
    this.length++;
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
    };
    const leadingNode = this.traverseToIndex(index - 1); 
    const nextPointer = leadingNode.next;
    leadingNode.next = newNode;
    newNode.next = nextPointer
    this.length++
    
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
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

  remove(index){
   
  // Check if head or tail values are being removed
    const leader = this.traverseToIndex(index-1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next;
    this.length--
    return this.printList()

  }
}

const myLinkedList = new LinkedList(12)
myLinkedList.append(12)
myLinkedList.append(23)
myLinkedList.append(12)
myLinkedList.append(23)

console.log(myLinkedList)