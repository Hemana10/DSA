// Node 
// - val
// - next
// - prev

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
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

    // Inserting at end / push
    // TC = O(1)
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Removing at end / pop
    // TC = O(1)
    pop() {
        if(!this.tail) return undefined;

        let temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    // Removing at begining / unshift
    // TC = O(1)
    shift() {
        if(!this.head) return undefined;

        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // Inserting at begining / unshift
    // TC = O(1)
    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TC = O(n/2) => O(n) // optimized than SLL
    get(index) {
        if(index < 0 || index >= this.length) return undefined;

        let mid = Math.floor(this.length/2);
        let current;
        if(index <= mid) {
            current = this.head;
            for(var counter = 0; counter !== index; counter++) {
                current = current.next;
            }
            console.log('traversals', counter);
        } else {
            current = this.tail;
            for(var counter = this.length - 1; counter !== index; counter--) {
                current = current.prev;
            }
            console.log('traversals', this.length -1  - counter);
        }
        return current;
    }

    // TC = O(n/2) => O(n) // same as Get
    set(index, val) {
        let indexNode = this.get(index);
        if(indexNode) {
            indexNode.val = val;
            return true;
        }
        return false;
    }

    // TC = O(n/2) => O(n) // same as Get worst case, else push or unshift O(1)
    insert(index, val) {
        if(index < 0 || index > this.length) return false;

        if(index === 0) return !!this.unshift(val); // 0 index
        if(index === this.length) return !!this.push(val); // last index
        
        let newNode = new Node(val);
        
        // get prev & next node
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        
        // connect prev & next to new node
        prevNode.next = newNode;
        nextNode.prev = newNode;

        // connect new node to next & prev
        newNode.next = nextNode;
        newNode.prev = prevNode;

        this.length++;
        return true;
    }


    // TC = O(n/2) => O(n) // same as Get worst case, else pop or shift O(1)
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;

        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let indexNode = this.get(index);

        // without additional variables
        // indexNode.prev.next = indexNode.next;
        // indexNode.next.prev = indexNode.prev;

        // get prev & next node
        let prevNode = indexNode.prev;
        let nextNode = indexNode.next;

        // connect prev & next node
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        // nullify index node connections
        indexNode.next = null;
        indexNode.prev = null;

        this.length--;
        return indexNode;
    }
}

let dbList = new DoublyLinkedList();
dbList.push('Hemana'); // 0
dbList.push('V'); // 1
dbList.push('Reddy'); // 2
dbList.push('is'); // 3
dbList.push('working'); // 4
dbList.push('currently'); // 5
dbList.push('in'); // 6
dbList.push('a'); // 7
dbList.push('company'); // 8
dbList.push('called'); // 9
dbList.push('telstra'); // 10
dbList.push('LLP'); // 11





