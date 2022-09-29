/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    // -----------W1D3 -------------
    /**
   * Creates a new node with the given data and inserts that node at the front
   * of the list.
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
    // list1.insertAtFront(10);
    insertAtFront(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this.head;
        // instantiate the ListNode with data
        // pointer of the newNode to the original head
        // reassign the head

        // edge case: how do we handle an empty list

    }

    /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
    removeHead() {
        // reassign the head
        if (!this.head) return this;
        this.head = this.head.next;
        return this;
    }


    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        let runner = this.head;
        while (runner) { // while(runner != null)
            console.log(runner.data);
            runner = runner.next;
        }

        // addtoFront(value){

        // }

        // removeFront() {

        // }

        // removeBack() {

        // }
    }
}



var emptyList = new SLL(); // EMPTY LIST
// emptyList.printList();


var list1 = new SLL();
// var list2 = new SLL();
list1.insertAtBack(5);
list1.insertAtBack(6);
list1.insertAtBack(7);
list1.removeHead();
list1.insertAtFront(10);

// HEAD
// (5) -> (6) -> (7) -> NULL

list1.printList();





