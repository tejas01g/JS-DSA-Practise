function findmax(arr, k){
    let low = 0;
    let high = 1;

    let sum = 0;
    let result = 0;

    for(let i = low; i <= high; i++){
        sum = sum + arr[i];
    }
    result = sum;

    while (high < arr.length-1){
        low++;
        high++;

        sum = sum - arr[low - 1];
        sum = sum + arr[high];
        result = Math.max(result, sum);
    }
    return result;
}

let arr = [100,200,300,400];
let k = 2;

console.log(findmax(arr, k));