function threesum(arr, target)
{
    for(let i = 0; i < arr.length; i++){
        for(let j= i+1; j < arr.length; j++)
            {
            for(let k = j+1; k < arr.length; k++)
                {
                let sum = arr[i] + arr[j] + arr[k];
                if (sum === target){
                    return [arr[i] , arr[j] , arr[k]];
                }
            }
        }
    }
    return "not found"
}

let arr = [2,4,5,6,7,8];
let target = 11;
console.log(threesum(arr,target))