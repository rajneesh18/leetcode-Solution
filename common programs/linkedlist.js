class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class MyLinkedList {
    constructor(val) {
        this.head = null;
        this.size = 0;
    }

    isEmpty = () => { return (this.head) ? false : true }
    getSize = () => { return this.size; }

    show = () => {
        if(!this.isEmpty()) {
            let current = this.head;
            let str = '';
            str += current.data;
            while(current.next != null) {
                current = current.next;
                str += ` -> ${current.data}`;
            }
            return str;
        }
    }

    addFirst = (data) => {
        let newNode = new Node(data);
        if(!this.isEmpty()) {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.size++;

        return this.head;
    }

    addLast = (data) => {
        let newNode = new Node(data);
        if(this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
        return this.head;
    }


}

let list = new MyLinkedList();
list.addFirst(2);
list.addFirst(5);
list.addLast(8);
console.log(list.show());