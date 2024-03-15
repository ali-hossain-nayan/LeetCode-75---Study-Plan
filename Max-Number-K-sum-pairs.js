/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    
    let frequency = {}
    let count = 0
    for(let i of nums){
       let compliment = k - i
       if(frequency[compliment]>0){
         count++
         frequency[compliment]--
       }else{
         frequency[i] = (frequency[i] ?? 0) + 1
       }
    }
    return count
    
 };