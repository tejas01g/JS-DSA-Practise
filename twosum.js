function twosum(nums,target){
    let map = new Map();

    for (let i = 0; i<nums.length; i++){
        let compliment = target - nums[i];
        if (map.has(compliment)){
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
}

let nums = [2,4,3,9,7];
let target = 11;
let result = twosum(nums,target);

console.log("Indices", result);
console.log("values", nums[result[0]], nums[result[1]]);