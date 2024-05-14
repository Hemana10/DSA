// the piece of data - val
// reference to the next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('How');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current);
            current = current.next;
        }
    }

    pop() {
        if(!this.length) return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

let list = new SinglyLinkedList();
list.push('HELLO');
list.push('THERE!!');
list.push('YOU!!');
console.log(list.pop());




