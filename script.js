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

    if (userMessage.includes('hello') || userMessage.includes('hii')) {
        response = 'Hello! Welcome to the Data Structure Visualizer. How can I assist you today?';
    } else if (userMessage.includes('array')) {
        response = 'Arrays are used to store a collection of data elements. You can perform operations like adding, deleting, or searching for elements. Would you like to learn more or see a visualization?';
    } else if (userMessage.includes('linked list')) {
        response = 'A linked list is a dynamic data structure that consists of nodes. You can add, delete, or traverse nodes. Would you like help with a specific operation or concept?';
    } else if (userMessage.includes('stack')) {
        response = 'Stacks follow the LIFO (Last In, First Out) principle. Common operations include push, pop, and peek. Let me know if you want a demonstration!';
    } else if (userMessage.includes('queue')) {
        response = 'Queues follow the FIFO (First In, First Out) principle. Operations like enqueue and dequeue are supported. Need help visualizing it?';
    } else if (userMessage.includes('sorting')) {
        response = 'Sorting algorithms arrange elements in a specific order. Would you like to see how Bubble Sort, Merge Sort, or Quick Sort works?';
    } else if (userMessage.includes('searching')) {
        response = 'Searching algorithms help you find elements in a data structure. Binary Search and Linear Search are common options. Shall I show you an example?';
    } else if (userMessage.includes('portfolio')) {
        response = 'You can find my portfolio projects on the main page. Explore more to see interesting implementations!';
    } else if (userMessage.includes('contact')) {
        response = 'You can contact me via email at anurajvenkatpurwar@gmail.com.';
    } else if (userMessage.includes('help')) {
        response = 'Sure! I can assist with topics like Arrays, Linked Lists, Stacks, Queues, Sorting, and Searching. Please ask me a specific question!';
    } else {
        response = 'Sorry, I didn\'t understand that. Could you rephrase or ask about a specific data structure or operation?';
    }

    // Append the bot's response to the chat
    appendMessage('Bot', response);
}
