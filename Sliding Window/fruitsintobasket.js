function fruitsintobasket(fruits){
    let low = 0;
    let high = 0;
    let res = 0;
    let freq = new Map();

    for(high = 0; high < fruits.length; high++){
        freq.set(fruits[high] , (freq.get(fruits[high]) || 0)+1);

        while(freq.size > 2){
            freq.set(fruits[low] ,freq.get(fruits[low])-1 );

            if(freq.get(fruits[low]) === 0)
            {
                freq.delete(fruits[low]);
            }
            low++;
        }
        let len = high - low + 1;
        res = Math.max(res, len);
    }
    return res;
}

let fruits = [0,1,2,2,3,3]
console.log(fruitsintobasket(fruits))