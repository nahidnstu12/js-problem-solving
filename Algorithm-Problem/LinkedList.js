// 10 --> 15 --> 20
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
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
  appendMany(...value) {}
  prepend(value) {
    const firstNode = {
      value,
      next: this.head,
    };
    this.head = firstNode;
    this.length++;
  }
  insert(value, index) {
    if (this.length <= index) {
      return this.append(value);
    }
    const newNode = { value, next: null };
    const leadingNode = this.traversToIndex(index - 1);
    const holdingPointer = leadingNode.next;
    leadingNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  traversToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leadingNode = this.traversToIndex(index - 1);
    const deletedNode = leadingNode.next;
    const replaceNode = deletedNode.next;
    leadingNode.next = replaceNode;
    this.length--;
  }
  removeAtFirst() {
    const removeFirstNode = this.head.next;
    this.head = removeFirstNode;
    this.length--;
  }
  removeAtLast() {
    const removeAtLast = this.traversToIndex(this.length - 1);
    removeAtLast.next = null;
    this.tail = removeAtLast;
    this.remove(this.length - 1);
    this.length--;
    return this.head;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let firstNode = this.head;
    this.tail = this.head
    let secondNode = firstNode.next;

    while (secondNode) {
      let tempNode = secondNode.next
      secondNode.next = firstNode
      firstNode = secondNode
      secondNode = tempNode

    }
    this.head.next = null
    this.head = firstNode 
    return this.printNode()
  }
  printNode() {
    const arr = [];
    let currentNode = this.head;
    // console.log( currentNode)
    while (currentNode) {
      arr.push(currentNode.value);
      // console.log(currentNode.next, this.length);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const lists = new LinkedList(10);
lists.append(15);
lists.append(25);
// lists.append(35);
// lists.append(45);
lists.prepend(1);
lists.insert(58, 2);
lists.insert(55, 6);
lists.remove(3);
lists.append(35);
lists.append(45);
// lists.removeAtFirst()

// console.log(lists.removeAtLast());

// lists.printNode()
// console.log(lists.printNode());
console.log(lists.printNode(), lists.length);
console.log(lists.reverse(),  lists.length)
// console.log(lists)
