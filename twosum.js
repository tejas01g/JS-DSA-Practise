// // function twosum(nums,target){
// //     let map = new Map();

// //     for (let i = 0; i<nums.length; i++){
// //         let compliment = target - nums[i];
// //         if (map.has(compliment)){
// //             return [map.get(compliment), i];
// //         }
// //         map.set(nums[i], i);
// //     }
// // }

// // let nums = [2,4,3,9,7];
// // let target = 11;
// // let result = twosum(nums,target);

// // console.log("Indices", result);
// // console.log("values", nums[result[0]], nums[result[1]]);




















// function twosum(nums, target){
//     let map = new Map();
//     for (let i =0; i<nums.length; i++){
//         let compliment = target - nums[i];
         
//     if(map.has(compliment)){
//         return[map.get(compliment), i];
//     }
//     map.set(nums[i],i);
//     }
// }

// let nums = [1,4,5,3,8,5,0];
// let target = 11;

// let result = twosum(nums ,target);

// console.log(result[0]);
// console.log(result[1])


function twosum(nums,target){
    for (let i =0; i<nums.length; i++){
        for (let j= 0; j<nums.length; j++){
            if (nums[i] + nums[j] == target){
                return[i,j]
            }
        }
    }
}

let nums =[3,2,5,7,4];
let target = 10;

console.log(twosum (nums,target))