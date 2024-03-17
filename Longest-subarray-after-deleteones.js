/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let i = 0;
   let j = 0;
   let zeroCount = 0;
   let result = 0;
   for(i = 0; i<nums.length; i++){
       if(nums[i]===0){
           zeroCount++;
       }
       while(zeroCount>1){
              if(nums[j]===0) zeroCount--;  
              j++
           
       }
       result = Math.max(result,i-j+1)
   }
   return result-1;
};