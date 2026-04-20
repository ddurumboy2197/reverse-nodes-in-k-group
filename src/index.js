class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;

    while (head) {
        let count = 0;
        let cur = head;

        // k node qatorini topish
        while (cur && count < k) {
            cur = cur.next;
            count++;
        }

        if (count < k) {
            break;
        }

        // k node qatorini teskari aylantish
        let preTail = head;
        let curTail = head;
        for (let i = 0; i < k; i++) {
            curTail = curTail.next;
        }
        let nextGroup = curTail.next;
        curTail.next = null;

        while (preTail !== curTail) {
            let nextNode = preTail.next;
            preTail.next = nextGroup;
            nextGroup = preTail;
            preTail = nextNode;
        }

        // qatorni qo'shish
        pre.next = nextGroup;
        preTail.next = head;
        head = preTail.next;
        pre = preTail;
    }

    return dummy.next;
}
