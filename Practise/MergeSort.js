function MergeSort(arr1, arr2){
    let i = 0;
    let j = 1;

    let result =[];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else(arr1[i] > arr2[j])
        {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}
let arr1 = [2,4,6,8];
let arr2 = [1,3,5,7];

console.log(MergeSort(arr1, arr2))