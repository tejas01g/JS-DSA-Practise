// // function MergeSort(arr1, arr2){
// //     let i = 0;
// //     let j = 0;

// //     let result =[];

// //     while(i < arr1.length && j < arr2.length){
// //         if(arr1[i] < arr2[j]){
// //             result.push(arr1[i]);
// //             i++;
// //         }
// //         else(arr1[i] > arr2[j])
// //         {
// //             result.push(arr2[j]);
// //             j++;
// //         }
// //     }
// //      while(i < arr1.length){
// //             result.push(arr1[i]);
// //             i++
// //         }
// //         while(j < arr2.length){
// //             result.push(arr2[j])
// //             j++
// //         } 
// //     return result;
// // }
// // let arr1 = [2,4,6,8];
// // let arr2 = [1,3,5,7];

// // console.log(MergeSort(arr1, arr2))













// function MergeSort(arr1, arr2){
//     let i = 0;
//     let j = 0;
//     let result = [];

//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i])
//             i++;
//         }
//         if(arr1[i] > arr2[j]){
//             result.push(arr2[j])
//             j++
//         }
//     }
//     while(i< arr1.length){
//         result.push(arr1[i])
//         i++;
//     }
//     while(j< arr2.length){
//         result.push(arr2[j])
//         j++;
//     }
//     return result;
// }

// let arr1 = [1,3,5,7,9]
// let arr2 = [2,4,6,8]

// console.log(MergeSort(arr1, arr2))








function MergeSort(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        if(arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j])
        j++;
    }
    return result;
}

let arr1 = [2,4,6,8]
let arr2 = [3,5,7,9]

console.log(MergeSort(arr1,arr2))