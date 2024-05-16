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
        this.size = 0;
    }

    // TC = O(1)
    enqueue(value) {
        let newNode = new Node(value);

        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;    
        }

        return ++this.size;
    }

    // TC = O(1)
    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;

        this.size--;
        return temp;
    }
}

let q = new Queue();
