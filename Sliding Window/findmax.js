// // function findmax(arr, k){
// //     let low = 0;
// //     let high = 1;

// //     let sum = 0;
// //     let result = 0;

// //     for(let i = low; i <= high; i++){
// //         sum = sum + arr[i];
// //     }
// //     result = sum;

// //     while (high < arr.length-1){
// //         low++;
// //         high++;

// //         sum = sum - arr[low - 1];
// //         sum = sum + arr[high];
// //         result = Math.max(result, sum);
// //     }
// //     return result;
// // }

// // let arr = [100,200,300,400];
// // let k = 2;

// // console.log(findmax(arr, k));
























// function findmax(arr, k){
//     let low = 0;
//     let high = k-1;

//     let result = 0;
//     let sum = 0;

//     for(let i = low; i <= high; i++){
//         sum = sum + arr[i];
//     }
//     result = sum;

//     while (high < arr.length-1){
//         low++;
//         high++;
        
//         sum = sum - arr[low-1];
//         sum = sum + arr[high];
//         result = Math.min(result,sum)
//     }
//     return result;
// }

// let arr = [100,200,300,400];
// let k = 2;

// console.log(findmax(arr,k));


/// Medium level 

function findmax(nums, target){
    let low = 0;
    let high = 0;
    let result = Infinity;
    let sum = 0;

    while (high < nums.length){
        sum = sum + nums[high];
        while ( sum >= target){
            let len = high - low+1;
            result = Math.min(result , len);
            sum = sum -  nums[low];
            low++;
        }
        high++;
    }
    return result === Infinity ? 0 : result;
}

let nums = [1,2,4,4];
let target = 4;
console.log(findmax(nums, target))