function longestsubstringwithoutrepeating(s){
    let low = 0;
    let high = 0;
    let res = 0;
    let freq = new Map();

    for(high = 0; high < s.length; high++){
        freq.set(s[high] , (freq.get(s[high]) || 0 )+1);

        while(freq.get(s[high]) > 1){
            freq.set(s[low] , freq.get(s[low]) -1 );
            if(freq.get(s[low]) === 0){
                freq.delete(s[low]);
            }
            low++;
        }
        let len = high - low +1;
        res = Math.max(res, len);
    }
    return res;
}

let s = 'aabbbxbbcbbbdsaabbbbbbbbccccabcdefg';
console.log(longestsubstringwithoutrepeating(s))
