function removeDuplicate(nums){
    if (nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++){
        if (nums[i] != nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
}

let nums = [1,1,2,2,3,3,3,4,4];
let k = removeDuplicate(nums);

console.log(k);
console.log(nums.slice(0,k));