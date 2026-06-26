class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

function ReverseLinkedlist(head) {
    let prev = null;
    let curr = head;

    while(curr != null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
console.log(ReverseLinkedlist(head))