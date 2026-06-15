// // function twosumm(nums, target){
// //     let map = new Map();

// //     for (let i = 0; i<nums.length; i++){
// //         let compliment = target - nums[i];
// //         if(map.has(compliment)){
// //             return [map.get(compliment), i];
// //         }
// //         map.set(nums[i],i);
// //     }
// // }
// // let nums = [2,4,5,6,8];
// // let target = 9;
// // console.log(twosumm(nums,target))









// function twosumm(nums , target){
//     let map = new Map ();

//     for(let i = 0; i < nums.length; i++){
//         let compliment = target - nums[i];

//         if(map.has(compliment)) {
//             return[map.get(compliment), i]
//         }
//         map.set(nums[i] , i)
//     }
// }

// let nums = [1,2,4,6,8];
// let target = 10;

// console.log(twosumm(nums,target))








function twosumm(nums,target){
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];

        if(map.has(compliment)) {
            return[map.get(compliment) , i];
    }
    map.set(nums[i] , i)
}
}
let nums = [1,3,5,4,6,2,]
let target = 10
console.log(twosumm(nums,target))
