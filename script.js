class ArrayDS {
    constructor() {
        this.array = [];
    }

    add(value) {
        this.array.push(value);
        this.visualize();
    }

    remove() {
        this.array.pop();
        this.visualize();
    }

    visualize() {
        const arrayContainer = document.getElementById('array');
        arrayContainer.innerHTML = 'Array: ' + this.array.join(', ');
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
        this.visualize();
    }

    dequeue() {
        this.queue.shift();
        this.visualize();
    }

    visualize() {
        const queueContainer = document.getElementById('queue');
        queueContainer.innerHTML = 'Queue: ' + this.queue.join(' <- ');
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
        this.visualize();
    }

    pop() {
        this.stack.pop();
        this.visualize();
    }

    visualize() {
        const stackContainer = document.getElementById('stack');
        stackContainer.innerHTML = 'Stack: ' + this.stack.join(' | ');
    }
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.visualize();
    }

    delete(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.visualize();
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
        this.visualize();
    }

    visualize() {
        const linkedListContainer = document.getElementById('linkedlist');
        linkedListContainer.innerHTML = '';
        let current = this.head;
        while (current) {
            const nodeElement = document.createElement('div');
            nodeElement.classList.add('node');
            nodeElement.textContent = current.value;
            linkedListContainer.appendChild(nodeElement);
            current = current.next;
        }
    }
}

const arrayDS = new ArrayDS();
const queue = new Queue();
const stack = new Stack();
const linkedList = new LinkedList();

function addArray() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        arrayDS.add(parseInt(value));
        document.getElementById('valueInput').value = '';
    }
}

function removeArray() {
    arrayDS.remove();
}

function enqueue() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        queue.enqueue(parseInt(value));
        document.getElementById('valueInput').value = '';
    }
}

function dequeue() {
    queue.dequeue();
}

function pushStack() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        stack.push(parseInt(value));
        document.getElementById('valueInput').value = '';
    }
}

function popStack() {
    stack.pop();
}

function insertLinkedList() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        linkedList.insert(parseInt(value));
        document.getElementById('valueInput').value = '';
    }
}

function deleteLinkedList() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        linkedList.delete(parseInt(value));
        document.getElementById('valueInput').value = '';
    }
}
