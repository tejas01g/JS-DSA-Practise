// function longestSub(s,k){
//     let low = 0;
//     let high = 0;
//     let res = 0;
//     let freq = new Map();

//     for(high = 0; high < s.length; high++) {
//         (freq.set[high] , (freq.get(s[high]) || 0)+1);
//     }

//     while(freq.size > k){
//         (freq.set(s[low]) , freq.get(s[low])-1);
//     }
//     if(freq.get(s[low]) === 0){
//         freq.delete(s[low]);
//     }
//     low++;
// }
// if(freq.size === k){
//     let len = high - low + 1;
//     let res = (res, len);
// }

















function longestSub(s){
    let high = 0;
    let low = 0;
    let res = 0;
    let freq = new Map();

    for (high = 0; high < s.length; high++) {
        freq.set(s[high] , (freq.get(s[high]) || 0) +1);
        while(freq.get(s[high] ) > 1) {
            freq.set(s[low], freq.get(s[low]) -1);
            if(freq.get(s[low]) === 0) {
                freq.delete(s[low]);
            }
            low++;
        }
         let len = high - low + 1;
        res = Math.max(res,len)
    }
    return res
}

let s = "aaaabbbccccdddeeeeeeffgggggggggggghhiiiiiiiijjjkkkklllmmmmiiiiihhhhhhhhh";
// let k = 0

console.log(longestSub(s))