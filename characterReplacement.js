function characterReplacement(s,k) {
    let low = 0;
    let high = 0;
    let freq = {};
    let max_len = 0;

    for (high = 0; high < s.length; high++) {
       freq[s[high]] = (freq[s[high]] || 0)+1;

       let len = high - low +1;
       let max_freq = Math.max(...Object.values(freq));

       while((len - max_freq) > k) {
        freq[s[low]]--;
        low++;

        len = high-low+1
        max_freq = Math.max(...Object.values(freq));
       }
       
       max_len = Math.max(max_len,len)
    }
    return max_len;
}

let s = "abaac"
let k =1
console.log(characterReplacement(s,k))