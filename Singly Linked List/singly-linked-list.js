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

    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
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

    shift() {
        if(!this.length) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        currentHead.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = this.head;
        }
        return currentHead;
    }

    unshift(val) {
        let newHead = new Node(val);
        if(!this.length) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length || !Number.isInteger(index)) return null;

        let current = this.head;
        for(let counter = 0; counter < index; counter++) {
            current = current.next;
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;  
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    reverse() {

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++) {
            next = node.next; // saving next connection
            node.next = prev; // connecting to previous connection

            prev = node; // move prev and node one step forward
            node = next;
        }

        return list;
    }
}

let list = new SinglyLinkedList();
list.push('YES!!');
list.push('HI');
list.push('HELLO');
list.push('THERE!!');
list.push('YOU!!');
// console.log(list.pop()); 
// console.log(list.shift());




