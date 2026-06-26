function Cycle(nums) {
    let slow = head;
    let fast = head;

    slow = 1;
    fast = 1;

    while(fast!= null && fast.next!= null) {
        slow = slow.next();
        fast = fast.next().next();
    }
    if(slow === fast) {
        return true
    }
    else {
        return false;
    }
}
let nums = [1,2,3,4,5]
console.log(Cycle(nums))