// function longestsub(s , k){
//     let low = 0;
//     let high = 0;
//     let res = 0;
//     let freq = new Map();

//     for(high = 0; high < s.length; high++){
        
//         freq.set(s[high] , (freq.get(s[high]) || 0)+1)
//         while(freq.size > k){
//             freq.set(s[low] , (freq.get(s[low])-1))
//             if (freq.get(s[low]) === 0){
//                 freq.delete(s[low]);
//             }
//             low++;
//         }
//         let len = high - low + 1;
//         res = Math.max(res , len);
//     }
//     return res;
// }
// let s = ['a','a','b','b','c','a']
// let k = 9
// console.log(longestsub(s,k))












// function longestsub(s,k){
//     let low = 0;
//     let res = 0;
//     let freq = new Map();

//     for(let high = 0; high < s.length; high++){
//         freq.set(s[high] , (freq.get(s[high]) || 0)+1);
//         while(freq.size > k){
//             freq.set(s[low], freq.get(s[low])-1);
//             if(freq.get(s[low]) === 0){
//                 freq.delete(s[low]);
//             }
//             low++;
//         }
//         if(freq.size === k){
//             let len = high - low + 1;
//             res = Math.max(res, len);
//         }
//     }
//     return res;
// }

// let s = ['a','a','a','b','c','b','b','c','c']
// let k = 4;
// console.log(longestsub(s,k))

function longestsub(s,k) {
    let low = 0;
    let high = 0;
    let res = 0;
    let freq = new Map();

    for(high = 0; high < s.length; high++) {
        freq.set(s[high] , (freq.get(s[high]) || 0) + 1);

        while(freq.size > k) {
            freq.set(s[low], freq.get(s[low]) -1);

            if(freq.get(s[low]) === 0) {
                freq.delete(s[low]);
            }
            low++;
        }
        if(freq.size === k) {
            let len = high - low + 1;
             res = Math.max(res, len)
        }
    }
    return res;
}
let s = ['a','a','a','a','b','b','c','c','b','b','c','c','d']
let k = 4
console.log(longestsub(s,k))