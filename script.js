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

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        this.visualize();
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
        this.visualize();
    }

    deleteNode(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            const tempNode = this.getMin(node.right);
            node.value = tempNode.value;
            node.right = this.deleteNode(node.right, tempNode.value);
            return node;
        }
    }

    getMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    visualize() {
        const container = document.getElementById('binarytree');
        container.innerHTML = '';
        if (this.root) {
            this.visualizeNode(container, this.root, 0, null, '');
        }
    }

    visualizeNode(container, node, depth, parentNode, direction) {
        const div = document.createElement('div');
        div.className = 'node';
        div.innerText = node.value;
        container.appendChild(div);

        if (parentNode) {
            const connector = document.createElement('div');
            connector.className = `connector ${direction}`;
            parentNode.appendChild(connector);
        }

        if (node.left) {
            this.visualizeNode(container, node.left, depth + 1, div, 'left');
        }
        if (node.right) {
            this.visualizeNode(container, node.right, depth + 1, div, 'right');
        }
    }
}

const binaryTree = new BinaryTree();

function insertBinaryTree() {
    const value = parseInt(document.getElementById('valueInput').value);
    if (!isNaN(value)) {
        binaryTree.insert(value);
    }
}

function deleteBinaryTree() {
    const value = parseInt(document.getElementById('valueInput').value);
    if (!isNaN(value)) {
        binaryTree.delete(value);
    }
}
// Chatbot Functions
function toggleChatbox() {
    const chatbox = document.querySelector('.chatbox');
    const chatboxToggle = document.querySelector('#chatbox-toggle');
    if (chatbox && chatboxToggle) {
        if (chatbox.style.display === 'none' || chatbox.style.display === '') {
            chatbox.style.display = 'block';
            chatboxToggle.style.display = 'none';
        } else {
            chatbox.style.display = 'none';
            chatboxToggle.style.display = 'block';
        }
    }
}

function sendMessage() {
    const userInput = document.querySelector('#user-input');
    const message = userInput ? userInput.value.trim() : '';
    if (message) {
        appendMessage('User', message);
        if (userInput) userInput.value = '';
        getBotResponse(message);
    }
}
function appendMessage(sender, message) {
    const chatboxContent = document.querySelector('#chatbox-content');
    if (chatboxContent) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender.toLowerCase());
        messageElement.innerText = `${sender}: ${message}`;
        chatboxContent.appendChild(messageElement);
        chatboxContent.scrollTop = chatboxContent.scrollHeight;
    }
}

function getBotResponse(message) {
    // Normalize the message for easier matching
    const userMessage = message.toLowerCase().trim();

    // Define responses for data structure-related queries
    let response;

    if (userMessage.includes('hello') || userMessage.includes('Hello')|| userMessage.includes('hii') || userMessage.includes('Hi') || userMessage.includes('Hii')) {
        response = 'Hello! Welcome to the Data Structure Visualizer. How can I assist you today?';
    } else if (userMessage.includes('array')) {
        response = 'Arrays are used to store a collection of data elements. You can perform operations like adding, deleting, or searching for elements. Would you like to learn more or see a visualization of array operations?';
    } else if (userMessage.includes('linked list')) {
        response = 'A linked list is a dynamic data structure that consists of nodes. You can add, delete, or traverse nodes. Would you like help with a specific operation or concept related to linked lists?';
    } else if (userMessage.includes('stack')) {
        response = 'Stacks follow the LIFO (Last In, First Out) principle. Common operations include push, pop, and peek. Want to see how to implement stack operations visually?';
    } else if (userMessage.includes('queue')) {
        response = 'Queues follow the FIFO (First In, First Out) principle. Operations like enqueue and dequeue are supported. Need help visualizing a queue operation?';
    } else if (userMessage.includes('sorting') || userMessage.includes('sort')) {
        response = 'Sorting algorithms arrange elements in a specific order. Common algorithms include Bubble Sort, Merge Sort, and Quick Sort. Would you like to see one of these sorting algorithms in action?';
    } else if (userMessage.includes('searching') || userMessage.includes('search')) {
        response = 'Searching algorithms help you find elements in a data structure. Common search algorithms include Linear Search and Binary Search. Would you like me to show you a demonstration of one?';
    } else if (userMessage.includes('binary search')) {
        response = 'Binary Search is a fast searching algorithm that works on sorted arrays. It divides the array in half to narrow down the search. Would you like to see how it works step-by-step?';
    } else if (userMessage.includes('bubble sort')) {
        response = 'Bubble Sort is a simple sorting algorithm where elements are repeatedly swapped to push the largest to the end. Would you like to visualize Bubble Sort in action?';
    } else if (userMessage.includes('merge sort')) {
        response = 'Merge Sort is a divide and conquer algorithm that splits the array in half and merges them back in sorted order. Want to see the steps of Merge Sort?';
    } else if (userMessage.includes('quick sort')) {
        response = 'Quick Sort is an efficient divide and conquer sorting algorithm that picks a pivot element and sorts around it. Would you like a visualization of Quick Sort?';
    } else if (userMessage.includes('heap')) {
        response = 'A Heap is a special tree-based data structure that satisfies the heap property. Would you like to see how the heap operations like insertion and deletion work?';
    } else if (userMessage.includes('linked list operations')) {
        response = 'In linked lists, common operations include insertion, deletion, and searching for elements. Would you like me to demonstrate how these operations work in a linked list?';
    } else if (userMessage.includes('doubly linked list')) {
        response = 'A doubly linked list is a type of linked list where each node points to both the next and previous nodes. Would you like a visual comparison with a singly linked list?';
    } else if (userMessage.includes('circular linked list')) {
        response = 'A circular linked list is a variation where the last node points back to the first node. Would you like to see how circular linked lists work?';
    } else if (userMessage.includes('queue operations')) {
        response = 'Queue operations include enqueue (add) and dequeue (remove). Would you like a demo of how these operations work with a visualization?';
    } else if (userMessage.includes('priority queue')) {
        response = 'A priority queue is a data structure where each element has a priority. Elements with higher priority are dequeued first. Would you like to see how priority queues work?';
    } else if (userMessage.includes('array rotation')) {
        response = 'Array rotation involves shifting elements of an array to the left or right. Would you like to see an example of array rotation?';
    } else if (userMessage.includes('insert element')) {
        response = 'Inserting an element into a data structure like an array or linked list requires shifting elements or adjusting pointers. Would you like to see an example?';
    } else if (userMessage.includes('delete element')) {
        response = 'Deleting an element from an array or linked list involves either shifting elements or updating pointers. Need help with a deletion operation?';
    } else if (userMessage.includes('reverse array')) {
        response = 'Reversing an array involves swapping the elements. Would you like a demonstration of reversing an array?';
    } else if (userMessage.includes('reverse linked list')) {
        response = 'Reversing a linked list requires changing the next pointers of each node. Would you like to see this operation in action?';
    } else if (userMessage.includes('help')) {
        response = 'Sure! I can assist with topics like Arrays, Linked Lists, Stacks, Queues, Sorting, and Searching. Please ask me a specific question or say "show me a demo" to start!';
    } else if (userMessage.includes('portfolio')) {
        response = 'You can find my portfolio projects on the main page. Feel free to check out the "Data Structure Visualizer" and more!';
    } else if (userMessage.includes('contact')) {
        response = 'You can contact me via email at anurajvenkatpurwar@gmail.com.';
    } else {
        response = 'Sorry, I didn\'t understand that. Could you rephrase or ask about a specific data structure or operation?';
    }

    // Append the bot's response to the chat
    appendMessage('Bot', response);
}
