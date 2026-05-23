function findsmallest(nums1,nums2){
    for(let i = 0; i< nums1.length; i++){
        for(let j = 0; j< nums2.length; j++){
            if(nums1[i] === nums2[j] && nums1[i]){
                return(nums1[i], nums2[j])
            } 
        }
    }
    return 'not'
}

let nums1 = [1,4,5,6]
let nums2 = [2,4,7,9]
console.log(findsmallest(nums1,nums2))