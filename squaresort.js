function squaresort(nums){
    let neg = [];
    let pos = [];

    for(let i = 0; i<nums.length; i++){
        if(nums[i] < 0){
            neg.push(nums[i]*nums[i]);
        }
        else{
            pos.push(nums[i]*nums[i]);
        }
    }
    neg.reverse();

    let i = 0;
    let j = 0;
    let result = [];

    while(i < neg.length && pos.length){
        if(neg[i] < pos[j]){
            result.push(neg[i]);
            i++;
        }
        else{
            result.push(pos[j]);
            j++;
        }
    }

    while (i < neg.length){
        result.push(neg[i]);
        i++;
    }

    while(j < pos.length){
        result.push(pos[j]);
        j++;
    }
    return result;
}

let nums = [-4,-1,2,3,5]
console.log (squaresort(nums))