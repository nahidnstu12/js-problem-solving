// 10 --> 15 --> 20
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const newNode = {
            value : value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value){
        const firstNode = {
            value,
            next:this.head
        }
        this.head = firstNode
        this.length++
    }
}

const lists = new LinkedList(10)
lists.append(15)
// lists.append(25)
lists.prepend(1)
console.log(lists)