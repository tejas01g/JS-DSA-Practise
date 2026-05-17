// function threesum(arr, target)
// {
//     for(let i = 0; i < arr.length; i++){
//         for(let j= i+1; j < arr.length; j++)
//             {
//             for(let k = j+1; k < arr.length; k++)
//                 {
//                 let sum = arr[i] + arr[j] + arr[k];
//                 if (sum === target){                                             //brute force 
//                     return [arr[i] , arr[j] , arr[k]];
//                 }
//             }
//         }
//     }
//     return "not found"
// }

// let arr = [2,4,5,6,7,8];
// let target = 11;
// console.log(threesum(arr,target))






function threesum(arr, target){
    for (let i = 0; i < arr.length; i++){
        let map = new Map();

        for (let j = i+1; j < arr.length; j++){
            let compliment = target - (arr[i] + arr[j]);

            if (map.has(compliment)){
                return [arr[i] , compliment , arr[j]];
            }
            map.set(arr[j], j)
        }
    }
    return "not found"
}

let arr = [1,2,0,5,8,9];
let target = 12;
console.log(threesum(arr, target))